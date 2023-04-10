import Header from "./components/Header";
import Button from "./components/Button";
import { useState, useEffect } from "react";
import { MainStyles } from "./styles/MainStyles";
import { Axios } from "../Axios";
import ProdutosDalista from "./components/Produtos";
import ItensDoCarrinho from "./components/ItensCarro";


function App() {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [itensDoCarrinho, setItensDoCarrinho] = useState([]);
  const [searchValue, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState("");

  useEffect(() => {
    const productList = async () => {
      try {
        const response = await Axios.get("products");
        setProducts(response.data);
        setAllProducts(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    productList();
  }, []);


  function searchProducts(products) {
    if (searchValue === "") {
      setProducts(allProducts);
      return;
    }
    const filteredProducts = [];
    for (let i = 0; i < products.length; i++) {
      const product = products[i];
      const productName = product.name
        .normalize("NFD")
        .toLowerCase()
        .replace(/[\u0300-\u036f]/g, "");
      const productCategory = product.category
        .normalize("NFD")
        .toLowerCase()
        .replace(/[\u0300-\u036f]/g, "");
      const searchValueNormalized = searchValue
        .normalize("NFD")
        .toLowerCase()
        .replace(/[\u0300-\u036f]/g, "");
      if (productName.includes(searchValueNormalized) || productCategory.includes(searchValueNormalized)) {
        filteredProducts.push(product);
      }
    }


    setSearchResult(searchValue);
    setProducts(filteredProducts);
    setSearch("");
  }

  function handleSearch(event) {
    const searchTerm = event.target.value;
    const normalizedSearchTerm = normalize(searchTerm);
    const lowercaseSearchTerm = normalizedSearchTerm.toLowerCase();
    const strippedSearchTerm = stripDiacritics(lowercaseSearchTerm);
    setSearch(strippedSearchTerm);
  }

  function normalize(str) {
    return str.normalize("NFD");
  }

  function stripDiacritics(str) {
    const diacritics = [
      { char: 'a', base: /[\340-\345]/g },
      { char: 'e', base: /[\350-\353]/g },
      { char: 'i', base: /[\354-\357]/g },
      { char: 'o', base: /[\362-\366]/g },
      { char: 'u', base: /[\371-\374]/g },
      { char: 'c', base: /[\347]/g },
      { char: 'n', base: /[\361]/g }
    ];

    let output = str.normalize("NFD");
    for (let i = 0; i < diacritics.length; i++) {
      output = output.replace(diacritics[i].base, diacritics[i].char);
    }

    output = output.replace(/[\u0300-\u036f]/g, "");
    output = output.replace(/í/g, "i");

    return output.toLowerCase();
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    const allProductsCopy = [...allProducts];
    const filteredProducts = searchProducts(allProductsCopy);
    setFiltered(filteredProducts);
  };


  const showAllProducts = function () {
    setProducts(allProducts);
  }


  function addToItensDoCarrinho(product) {
    const isProductInCart = itensDoCarrinho.some((productF) => {
      return productF.id === product.id;
    });
    if (isProductInCart) {
      return;
    }
    setItensDoCarrinho(itensDoCarrinho.concat(product));
    setItensDoCarrinho(newCartItems);
  }

  function removeProduct(id) {
    const newItensDoCarrinho = [];
    for (let i = 0; i < itensDoCarrinho.length; i++) {
      const product = itensDoCarrinho[i];
      if (product.id !== id) {
        newItensDoCarrinho.push(product);
      }
    }
    setItensDoCarrinho(newItensDoCarrinho);
  }
  function removeAllItensDoCarrinho() {
    const emptyCart = [];
    setItensDoCarrinho(emptyCart);
  }
  const headerProps = {
    handleSubmit: handleSubmit,
    inputValue: searchValue,
    handleSearch: handleSearch
  };

  return (
    <div className="App">
      <Header {...headerProps} />
      <MainStyles>
        {products !== allProducts && (
          <div className="container-Principal-Do-Header">
            <h1>
              Resultado Para: <span>"{searchResult}"</span>
            </h1>
            <Button onClick={showAllProducts} classN="botao-Limpar-Do-Produto">
              Limpar
            </Button>
          </div>
        )}

        <div className="container-Man-Principal">
          <section className="sectionProdutos">
            <ul>
              {products.map((product) => (
                <ProdutosDalista key={product.id} product={product}>
                  <Button
                    key={product.id}
                    onClick={() => addToItensDoCarrinho(product)}
                    text="Adicionar"
                  ></Button>
                </ProdutosDalista>
              ))}
            </ul>
          </section>
          <ItensDoCarrinho
            {...{ removeAllItensDoCarrinho, removeProduct, itensDoCarrinho }}
          />
        </div>
      </MainStyles>
    </div>
  );
}

export default App;
