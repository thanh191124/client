import React, { useEffect, useState } from 'react'
import query from 'jquery';
import { Link, NavLink ,useNavigate} from 'react-router-dom';
import { CategoryController } from '../../controller/categoryController.ts';
const HeaderOne = () => {
    const [scroll, setScroll] = useState(false)
    useEffect(() => {
        window.onscroll = () => {
            if (window.pageYOffset < 150) {
                setScroll(false);
            } else if (window.pageYOffset > 150) {
                setScroll(true);
            }
            return () => (window.onscroll = null);
        };
        const selectElement = query('.js-example-basic-single');
        selectElement.select2();

        return () => {
            if (selectElement.data('select2')) {
                selectElement.select2('destroy');
            }
        };

    }, []);

    // Set the default language
    const [selectedLanguage, setSelectedLanguage] = useState("Eng");
    const handleLanguageChange = (language) => {
        setSelectedLanguage(language);
    };

    // Set the default currency
    const [selectedCurrency, setSelectedCurrency] = useState("USD");
    const handleCurrencyChange = (currency) => {
        setSelectedCurrency(currency);
    };


    // Mobile menu support
    const [menuActive, setMenuActive] = useState(false)
    const [activeIndex, setActiveIndex] = useState(null);
    const handleMenuClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    const handleMenuToggle = () => {
        setMenuActive(!menuActive);
    };


    // Search control support
    const [activeSearch, setActiveSearch] = useState(false)
    const handleSearchToggle = () => {
        setActiveSearch(!activeSearch);
    };

    // category control support
    const [activeCategory, setActiveCategory] = useState(false)
    const handleCategoryToggle = () => {
        setActiveCategory(!activeCategory);
    };
    const [activeIndexCat, setActiveIndexCat] = useState(null);
    const handleCatClick = (index) => {
        setActiveIndexCat(activeIndexCat === index ? null : index);
    };



    const[datacategory,setdatacategory] = useState([]);
    const showdataCategory = async () => {
        const data = await CategoryController.getAllCategories();
        setdatacategory(data);
      }
    
      useEffect(() => {
        // showdataProduct();
        showdataCategory();
        console.log(datacategory);

      }, []);
      const [searchTerm, setSearchTerm] = useState(''); // State để lưu giá trị tìm kiếm
      const navigate = useNavigate(); // Hook để điều hướng
  
      const handleSearch = (e) => {
          e.preventDefault(); // Ngăn chặn form submit mặc định
          if (searchTerm) {
              navigate(`/shop?productname=${searchTerm}`); // Điều hướng đến trang /shop với query productname
          }
      };
  
    return (
        <>
            <div className="overlay" />
            <div className={`side-overlay ${(menuActive || activeCategory) && "show"}`} />
            {/* ==================== Search Box Start Here ==================== */}
            <form action="#" className={`search-box ${activeSearch && "active"}`}>
                <button onClick={handleSearchToggle}
                    type="button"
                    className="search-box__close position-absolute inset-block-start-0 inset-inline-end-0 m-16 w-48 h-48 border border-gray-100 rounded-circle flex-center text-white hover-text-gray-800 hover-bg-white text-2xl transition-1"
                >
                    <i className="ph ph-x" />
                </button>
                <div className="container">
                    <div className="position-relative">
                        <input
                            type="text"
                            className="form-control py-16 px-24 text-xl rounded-pill pe-64"
                            placeholder="Search for a product or brand"
                        />
                        <button
                            type="submit"
                            className="w-48 h-48 bg-main-600 rounded-circle flex-center text-xl text-white position-absolute top-50 translate-middle-y inset-inline-end-0 me-8"
                        >
                            <i className="ph ph-magnifying-glass" />
                        </button>
                    </div>
                </div>
            </form>
            {/* ==================== Search Box End Here ==================== */}
            {/* ==================== Mobile Menu Start Here ==================== */}
            <div className={`mobile-menu scroll-sm d-lg-none d-block ${menuActive && "active"}`}>
                <button onClick={() => { handleMenuToggle(); setActiveIndex(null) }} type="button" className="close-button">

                    <i className="ph ph-x" />{" "}
                </button>
                <div className="mobile-menu__inner">
                    <Link to="/" className="mobile-menu__logo">
                        <img src="assets/images/logo/logo.png" alt="Logo" />
                    </Link>
                    <div className="mobile-menu__menu">
                        {/* Nav Menu Start */}
                        <ul className="nav-menu flex-align nav-menu--mobile">
                            {/* Home Menu */}
                            <li onClick={() => handleMenuClick(0)}
                                className={`on-hover-item nav-menu__item has-submenu ${activeIndex === 0 ? "d-block" : ""
                                    }`}
                            >
                                <Link
                                    to="#"
                                    className="nav-menu__link"

                                >
                                    Trang Chủ
                                </Link>
                                <ul
                                    className={`on-hover-dropdown common-dropdown nav-submenu scroll-sm ${activeIndex === 0 ? "open" : ""
                                        }`}
                                >
                                    <li className="common-dropdown__item nav-submenu__item">
                                        <Link
                                            to="/"
                                            className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                            onClick={() => setActiveIndex(null)}
                                        >
                                            {" "}
                                            Home One
                                        </Link>
                                    </li>
                                    <li className="common-dropdown__item nav-submenu__item">
                                        <Link
                                            to="/index-two"
                                            className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                            onClick={() => setActiveIndex(null)}
                                        >
                                            {" "}
                                            Home Two
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            {/* Shop Menu */}
                            <li onClick={() => handleMenuClick(1)}
                                className={`on-hover-item nav-menu__item has-submenu ${activeIndex === 1 ? "d-block" : ""
                                    }`}
                            >
                                <Link
                                    to="#"
                                    className="nav-menu__link"

                                >
                                    Shop
                                </Link>
                                <ul
                                    className={`on-hover-dropdown common-dropdown nav-submenu scroll-sm ${activeIndex === 1 ? "open" : ""
                                        }`}
                                >
                                    <li className="common-dropdown__item nav-submenu__item">
                                        <Link
                                            to="/shop"
                                            className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                            onClick={() => setActiveIndex(null)}
                                        >
                                            {" "}
                                            Shop
                                        </Link>
                                    </li>
                                    <li className="common-dropdown__item nav-submenu__item">
                                        <Link
                                            to="/product-details"
                                            className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                            onClick={() => setActiveIndex(null)}
                                        >
                                            {" "}
                                            Shop Details
                                        </Link>
                                    </li>
                                    <li className="common-dropdown__item nav-submenu__item">
                                        <Link
                                            to="/product-details-two"
                                            className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                            onClick={() => setActiveIndex(null)}
                                        >
                                            {" "}
                                            Shop Details Two
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            {/* Pages Menu */}
                            <li onClick={() => handleMenuClick(2)}
                                className={`on-hover-item nav-menu__item has-submenu ${activeIndex === 2 ? "d-block" : ""
                                    }`}
                            >
                                <span className="badge-notification bg-warning-600 text-white text-sm py-2 px-8 rounded-4">
                                    New
                                </span>
                                <Link
                                    to="#"
                                    className="nav-menu__link"

                                >
                                    Pages
                                </Link>
                                <ul
                                    className={`on-hover-dropdown common-dropdown nav-submenu scroll-sm ${activeIndex === 2 ? "open" : ""
                                        }`}
                                >
                                    <li className="common-dropdown__item nav-submenu__item">
                                        <Link
                                            to="/cart"
                                            className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                            onClick={() => setActiveIndex(null)}
                                        >
                                            {" "}
                                            Cart
                                        </Link>
                                    </li>
                                    <li className="common-dropdown__item nav-submenu__item">
                                        <Link
                                            to="/checkout"
                                            className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                            onClick={() => setActiveIndex(null)}
                                        >
                                            {" "}
                                            Checkout{" "}
                                        </Link>
                                    </li>
                                    <li className="common-dropdown__item nav-submenu__item">
                                        <Link
                                            to="/account"
                                            className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                            onClick={() => setActiveIndex(null)}
                                        >
                                            {" "}
                                            Account
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            {/* Blog Menu */}
                            <li onClick={() => handleMenuClick(3)}
                                className={`on-hover-item nav-menu__item has-submenu ${activeIndex === 3 ? "d-block" : ""
                                    }`}
                            >
                                <Link
                                    to="#"
                                    className="nav-menu__link"

                                >
                                    Blog
                                </Link>
                                <ul
                                    className={`on-hover-dropdown common-dropdown nav-submenu scroll-sm ${activeIndex === 3 ? "open" : ""
                                        }`}
                                >
                                    <li className="common-dropdown__item nav-submenu__item">
                                        <Link
                                            to="/blog"
                                            className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                            onClick={() => setActiveIndex(null)}
                                        >
                                            {" "}
                                            Blog
                                        </Link>
                                    </li>
                                    <li className="common-dropdown__item nav-submenu__item">
                                        <Link
                                            to="/blog-details"
                                            className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                            onClick={() => setActiveIndex(null)}
                                        >
                                            {" "}
                                            Blog Details
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            {/* Contact Us Menu */}
                            <li className="nav-menu__item">
                                <Link
                                    to="/contact"
                                    className="nav-menu__link"
                                    onClick={() => setActiveIndex(null)}
                                >
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                        {/* Nav Menu End */}
                    </div>
                </div>
            </div>
            {/* ==================== Mobile Menu End Here ==================== */}
            {/* ======================= Middle Top Start ========================= */}
            <div className="header-top bg-main-600 flex-between">
                <div className="container container-lg">
                    <div className="flex-between flex-wrap gap-8">
                        <ul className="flex-align flex-wrap d-none d-md-flex">
                            <li className="border-right-item">
                                <Link
                                    to="#"
                                    className="text-white text-sm hover-text-decoration-underline"
                                >
                                    Become A Seller
                                </Link>
                            </li>
                            <li className="border-right-item">
                                <Link
                                    to="#"
                                    className="text-white text-sm hover-text-decoration-underline"
                                >
                                    About us
                                </Link>
                            </li>
                            <li className="border-right-item">
                                <Link
                                    to="#"
                                    className="text-white text-sm hover-text-decoration-underline"
                                >
                                    Free Delivery
                                </Link>
                            </li>
                            <li className="border-right-item">
                                <Link
                                    to="#"
                                    className="text-white text-sm hover-text-decoration-underline"
                                >
                                    Returns Policy
                                </Link>
                            </li>
                        </ul>
                        <ul className="header-top__right flex-align flex-wrap">
                            <li className="on-hover-item border-right-item border-right-item-sm-space has-submenu arrow-white">
                                <Link to="#" className="text-white text-sm py-8">
                                    Help Center
                                </Link>
                                <ul className="on-hover-dropdown common-dropdown common-dropdown--sm max-h-200 scroll-sm px-0 py-8">
                                    <li className="nav-submenu__item">
                                        <Link
                                            to="#"
                                            className="nav-submenu__link hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                                        >
                                            <span className="text-sm d-flex">
                                                <i className="ph ph-headset" />
                                            </span>
                                            Call Center
                                        </Link>
                                    </li>
                                    <li className="nav-submenu__item">
                                        <Link
                                            to="#"
                                            className="nav-submenu__link hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                                        >
                                            <span className="text-sm d-flex">
                                                <i className="ph ph-chat-circle-dots" />
                                            </span>
                                            Live Chat
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="on-hover-item border-right-item border-right-item-sm-space has-submenu arrow-white">
                                {/* Display the selected language here */}
                                <Link to="#" className="selected-text text-white text-sm py-8">
                                    {selectedLanguage}
                                </Link>
                                <ul className="selectable-text-list on-hover-dropdown common-dropdown common-dropdown--sm max-h-200 scroll-sm px-0 py-8">
                                    <li>
                                        <Link
                                            to="#"
                                            className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                                            onClick={() => handleLanguageChange("English")}
                                        >
                                            <img
                                                src="assets/images/thumbs/flag1.png"
                                                alt=""
                                                className="w-16 h-12 rounded-4 border border-gray-100"
                                            />
                                            English
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="#"
                                            className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                                            onClick={() => handleLanguageChange("Japan")}
                                        >
                                            <img
                                                src="assets/images/thumbs/flag2.png"
                                                alt=""
                                                className="w-16 h-12 rounded-4 border border-gray-100"
                                            />
                                            Japan
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="#"
                                            className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                                            onClick={() => handleLanguageChange("French")}
                                        >
                                            <img
                                                src="assets/images/thumbs/flag3.png"
                                                alt=""
                                                className="w-16 h-12 rounded-4 border border-gray-100"
                                            />
                                            French
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="#"
                                            className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                                            onClick={() => handleLanguageChange("Germany")}
                                        >
                                            <img
                                                src="assets/images/thumbs/flag4.png"
                                                alt=""
                                                className="w-16 h-12 rounded-4 border border-gray-100"
                                            />
                                            Germany
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="#"
                                            className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                                            onClick={() => handleLanguageChange("Bangladesh")}
                                        >
                                            <img
                                                src="assets/images/thumbs/flag6.png"
                                                alt=""
                                                className="w-16 h-12 rounded-4 border border-gray-100"
                                            />
                                            Bangladesh
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="#"
                                            className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                                            onClick={() => handleLanguageChange("South Korea")}
                                        >
                                            <img
                                                src="assets/images/thumbs/flag5.png"
                                                alt=""
                                                className="w-16 h-12 rounded-4 border border-gray-100"
                                            />
                                            South Korea
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="on-hover-item border-right-item border-right-item-sm-space has-submenu arrow-white">
                                {/* Display the selected currency */}
                                <Link to="#" className="selected-text text-white text-sm py-8">
                                    {selectedCurrency}
                                </Link>
                                <ul className="selectable-text-list on-hover-dropdown common-dropdown common-dropdown--sm max-h-200 scroll-sm px-0 py-8">
                                    <li>
                                        <Link
                                            to="#"
                                            className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                                            onClick={() => handleCurrencyChange("USD")}
                                        >
                                            <img
                                                src="assets/images/thumbs/flag1.png"
                                                alt=""
                                                className="w-16 h-12 rounded-4 border border-gray-100"
                                            />
                                            USD
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="#"
                                            className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                                            onClick={() => handleCurrencyChange("Yen")}
                                        >
                                            <img
                                                src="assets/images/thumbs/flag2.png"
                                                alt=""
                                                className="w-16 h-12 rounded-4 border border-gray-100"
                                            />
                                            Yen
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="#"
                                            className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                                            onClick={() => handleCurrencyChange("Franc")}
                                        >
                                            <img
                                                src="assets/images/thumbs/flag3.png"
                                                alt=""
                                                className="w-16 h-12 rounded-4 border border-gray-100"
                                            />
                                            Franc
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="#"
                                            className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                                            onClick={() => handleCurrencyChange("EURO")}
                                        >
                                            <img
                                                src="assets/images/thumbs/flag4.png"
                                                alt=""
                                                className="w-16 h-12 rounded-4 border border-gray-100"
                                            />
                                            EURO
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="#"
                                            className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                                            onClick={() => handleCurrencyChange("BDT")}
                                        >
                                            <img
                                                src="assets/images/thumbs/flag6.png"
                                                alt=""
                                                className="w-16 h-12 rounded-4 border border-gray-100"
                                            />
                                            BDT
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="#"
                                            className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                                            onClick={() => handleCurrencyChange("WON")}
                                        >
                                            <img
                                                src="assets/images/thumbs/flag5.png"
                                                alt=""
                                                className="w-16 h-12 rounded-4 border border-gray-100"
                                            />
                                            WON
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="border-right-item">
                                <Link
                                    to="/account"
                                    className="text-white text-sm py-8 flex-align gap-6"
                                >
                                    <span className="icon text-md d-flex">
                                        {" "}
                                        <i className="ph ph-user-circle" />{" "}
                                    </span>
                                    <span className="hover-text-decoration-underline">
                                        My Account
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* ======================= Middle Top End ========================= */}
            {/* ======================= Middle Header Start ========================= */}
            <header className="header-middle bg-color-one border-bottom border-gray-100">
                <div className="container container-lg">
                    <nav className="header-inner flex-between">
                        {/* Logo Start */}
                        <div className="logo">
                            <Link to="/" className="link">
                                <img src="assets/images/logo/logo.png" alt="Logo" />
                            </Link>
                        </div>
                        {/* Logo End  */}
                        {/* form location Start */}
                        <form action="#" className="flex-align flex-wrap form-location-wrapper">
                            <div className="search-category d-flex h-48 select-border-end-0 radius-end-0 search-form d-sm-flex d-none">
                               
                                <div className="search-form__wrapper position-relative">
                                    <input
                                        type="text"
                                        className="search-form__input common-input py-13 ps-16 pe-18 rounded-end-pill pe-44"
                                        placeholder="Search for a product or brand"
                                    />
                                    <button
                                        type="submit"
                                        className="w-32 h-32 bg-main-600 rounded-circle flex-center text-xl text-white position-absolute top-50 translate-middle-y inset-inline-end-0 me-8"
                                    >
                                        <i className="ph ph-magnifying-glass" />
                                    </button>
                                </div>
                            </div>
                          
                        </form>
                        {/* form location start */}
                        {/* Header Middle Right start */}
                        <div className="header-right flex-align d-lg-block d-none">
                            <div className="flex-align flex-wrap gap-12">
                                <button
                                    type="button"
                                    className="search-icon flex-align d-lg-none d-flex gap-4 item-hover"
                                >
                                    <span className="text-2xl text-gray-700 d-flex position-relative item-hover__text">
                                        <i className="ph ph-magnifying-glass" />
                                    </span>
                                </button>
                                <Link to="/cart" className="flex-align gap-4 item-hover">
                                    <span className="text-2xl text-gray-700 d-flex position-relative me-6 mt-6 item-hover__text">
                                        <i className="ph ph-heart" />
                                        <span className="w-16 h-16 flex-center rounded-circle bg-main-600 text-white text-xs position-absolute top-n6 end-n4">
                                            2
                                        </span>
                                    </span>
                                    <span className="text-md text-gray-500 item-hover__text d-none d-lg-flex">
                                        Wishlist
                                    </span>
                                </Link>
                                <Link to="/cart" className="flex-align gap-4 item-hover">
                                    <span className="text-2xl text-gray-700 d-flex position-relative me-6 mt-6 item-hover__text">
                                        <i className="ph ph-shopping-cart-simple" />
                                        <span className="w-16 h-16 flex-center rounded-circle bg-main-600 text-white text-xs position-absolute top-n6 end-n4">
                                            2
                                        </span>
                                    </span>
                                    <span className="text-md text-gray-500 item-hover__text d-none d-lg-flex">
                                        Cart
                                    </span>
                                </Link>
                            </div>
                        </div>
                        {/* Header Middle Right End  */}
                    </nav>
                </div>
            </header>
            {/* ======================= Middle Header End ========================= */}
            {/* ==================== Header Start Here ==================== */}
            <header className={`header bg-white border-bottom border-gray-100 ${scroll && "fixed-header"}`}>
                <div className="container container-lg">
                    <nav className="header-inner d-flex justify-content-between gap-8">
                        <div className="flex-align menu-category-wrapper">
                            {/* Category Dropdown Start */}
                            <div className="category on-hover-item">
                                <button
                                    onClick={handleCategoryToggle}
                                    type="button"
                                    className="category__button flex-align gap-8 fw-medium p-16 border-end border-start border-gray-100 text-heading"
                                >
                                    <span className="icon text-2xl d-xs-flex d-none">
                                        <i className="ph ph-dots-nine" />
                                    </span>
                                    <span className="d-sm-flex d-none">Danh Mục</span>
                                    <span className="arrow-icon text-xl d-flex">
                                        <i className="ph ph-caret-down" />
                                    </span>
                                </button>
                                <div className={`responsive-dropdown cat on-hover-dropdown common-dropdown nav-submenu p-0 submenus-submenu-wrapper ${activeCategory && "active"}`}>
                                    <button
                                        onClick={() => { handleCategoryToggle(); setActiveIndexCat(null) }}
                                        type="button"
                                        className="close-responsive-dropdown rounded-circle text-xl position-absolute inset-inline-end-0 inset-block-start-0 mt-4 me-8 d-lg-none d-flex"
                                    >
                                        {" "}
                                        <i className="ph ph-x" />{" "}
                                    </button>
                                    {/* Logo Start */}
                                    <div className="logo px-16 d-lg-none d-block">
                                        <Link to="/" className="link">
                                            <img src="assets/images/logo/logo.png" alt="Logo" />
                                        </Link>
                                    </div>
                                    {/* Logo End */}
                                    <ul className="scroll-sm p-0 py-8 w-300 max-h-400 overflow-y-auto">
                            {datacategory.length > 0 ? (
                datacategory.map((category) => (
                    <li className="has-submenus-submenu" key={category.CategoryID}>
                        <Link
                            to={`/shop/?category=${category.CategoryID}`} // Thay đường dẫn nếu cần
                            className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                        >
                            <span>{category.CategoryName}</span>
                            <span className="icon text-md d-flex ms-auto">
                                <i className="ph ph-caret-right" />
                            </span>
                        </Link>
                    </li>
                ))
            ) : (
                <li>No categories available</li>
            )}
                               
                            </ul>
                                </div>
                            </div>
                            {/* Category Dropdown End  */}
                            {/* Menu Start  */}
                            <div className="header-menu d-lg-block d-none">
                                {/* Nav Menu Start */}
                                <ul className="nav-menu flex-align ">
                                    <li className="on-hover-item nav-menu__item has-submenu">
                                        <Link to="#" className="nav-menu__link">
                                            Home
                                        </Link>
                                        <ul className="on-hover-dropdown common-dropdown nav-submenu scroll-sm">
                                            <li className="common-dropdown__item nav-submenu__item">
                                                <NavLink
                                                    to="/"
                                                    // className={`common-dropdown__link nav-submenu__link hover-bg-neutral-100 `}
                                                    className={(navData) =>
                                                        navData.isActive ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage" : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                                    }
                                                >
                                                    Home One
                                                </NavLink>
                                            </li>
                                            <li className="common-dropdown__item nav-submenu__item">
                                                <NavLink
                                                    to="/index-two"
                                                    className={(navData) =>
                                                        navData.isActive ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage" : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                                    }
                                                >
                                                    {" "}
                                                    Home Two
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="on-hover-item nav-menu__item has-submenu">
                                        <Link to="#" className="nav-menu__link">
                                            Shop
                                        </Link>
                                        <ul className="on-hover-dropdown common-dropdown nav-submenu scroll-sm">
                                            <li className="common-dropdown__item nav-submenu__item">
                                                <NavLink
                                                    to="/shop"
                                                    className={(navData) =>
                                                        navData.isActive ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage" : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                                    }
                                                >
                                                    {" "}
                                                    Shop
                                                </NavLink>
                                            </li>
                                            <li className="common-dropdown__item nav-submenu__item">
                                                <NavLink
                                                    to="/product-details"
                                                    className={(navData) =>
                                                        navData.isActive ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage" : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                                    }
                                                >
                                                    {" "}
                                                    Shop Details
                                                </NavLink>
                                            </li>
                                            <li className="common-dropdown__item nav-submenu__item">
                                                <NavLink
                                                    to="/product-details-two"
                                                    className={(navData) =>
                                                        navData.isActive ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage" : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                                    }
                                                >
                                                    {" "}
                                                    Shop Details Two
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="on-hover-item nav-menu__item has-submenu">
                                        <span className="badge-notification bg-warning-600 text-white text-sm py-2 px-8 rounded-4">
                                            New
                                        </span>
                                        <Link to="#" className="nav-menu__link">
                                            Pages
                                        </Link>
                                        <ul className="on-hover-dropdown common-dropdown nav-submenu scroll-sm">
                                            <li className="common-dropdown__item nav-submenu__item">
                                                <NavLink
                                                    to="/cart"
                                                    className={(navData) =>
                                                        navData.isActive ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage" : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                                    }
                                                >
                                                    {" "}
                                                    Cart
                                                </NavLink>
                                            </li>
                                            <li className="common-dropdown__item nav-submenu__item">
                                                <NavLink
                                                    to="/checkout"
                                                    className={(navData) =>
                                                        navData.isActive ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage" : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                                    }
                                                >
                                                    {" "}
                                                    Checkout{" "}
                                                </NavLink>
                                            </li>
                                            <li className="common-dropdown__item nav-submenu__item">
                                                <NavLink
                                                    to="/account"
                                                    className={(navData) =>
                                                        navData.isActive ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage" : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                                    }
                                                >
                                                    {" "}
                                                    Account
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="on-hover-item nav-menu__item has-submenu">
                                        <Link to="#" className="nav-menu__link">
                                            Blog
                                        </Link>
                                        <ul className="on-hover-dropdown common-dropdown nav-submenu scroll-sm">
                                            <li className="common-dropdown__item nav-submenu__item">
                                                <NavLink
                                                    to="/blog"
                                                    className={(navData) =>
                                                        navData.isActive ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage" : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                                    }
                                                >
                                                    {" "}
                                                    Blog
                                                </NavLink>
                                            </li>
                                            <li className="common-dropdown__item nav-submenu__item">
                                                <NavLink
                                                    to="/blog-details"
                                                    className={(navData) =>
                                                        navData.isActive ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage" : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                                    }
                                                >
                                                    {" "}
                                                    Blog Details
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-menu__item">
                                        <NavLink to="/contact" className={(navData) =>
                                            navData.isActive ? "nav-menu__link activePage" : "nav-menu__link"
                                        }>
                                            Contact Us
                                        </NavLink>
                                    </li>
                                </ul>
                                {/* Nav Menu End */}
                            </div>
                            {/* Menu End  */}
                        </div>
                        {/* Header Right start */}
                        <div className="header-right flex-align">
                            <Link
                                to="/tel:01234567890"
                                className="bg-main-600 text-white p-12 h-100 hover-bg-main-800 flex-align gap-8 text-lg d-lg-flex d-none"
                            >
                                <div className="d-flex text-32">
                                    <i className="ph ph-phone-call" />
                                </div>
                                01- 234 567 890
                            </Link>
                            <div className="me-16 d-lg-none d-block">
                                <div className="flex-align flex-wrap gap-12">
                                    <button onClick={handleSearchToggle}
                                        type="button"
                                        className="search-icon flex-align d-lg-none d-flex gap-4 item-hover"
                                    >
                                        <span className="text-2xl text-gray-700 d-flex position-relative item-hover__text">
                                            <i className="ph ph-magnifying-glass" />
                                        </span>
                                    </button>
                                    <Link to="/cart" className="flex-align gap-4 item-hover">
                                        <span className="text-2xl text-gray-700 d-flex position-relative me-6 mt-6 item-hover__text">
                                            <i className="ph ph-heart" />
                                            <span className="w-16 h-16 flex-center rounded-circle bg-main-600 text-white text-xs position-absolute top-n6 end-n4">
                                                2
                                            </span>
                                        </span>
                                        <span className="text-md text-gray-500 item-hover__text d-none d-lg-flex">
                                            Wishlist
                                        </span>
                                    </Link>
                                    <Link to="/cart" className="flex-align gap-4 item-hover">
                                        <span className="text-2xl text-gray-700 d-flex position-relative me-6 mt-6 item-hover__text">
                                            <i className="ph ph-shopping-cart-simple" />
                                            <span className="w-16 h-16 flex-center rounded-circle bg-main-600 text-white text-xs position-absolute top-n6 end-n4">
                                                2
                                            </span>
                                        </span>
                                        <span className="text-md text-gray-500 item-hover__text d-none d-lg-flex">
                                            Cart
                                        </span>
                                    </Link>
                                </div>
                            </div>
                            <button
                                onClick={handleMenuToggle}
                                type="button"
                                className="toggle-mobileMenu d-lg-none ms-3n text-gray-800 text-4xl d-flex"
                            >
                                {" "}
                                <i className="ph ph-list" />{" "}
                            </button>
                        </div>
                        {/* Header Right End  */}
                    </nav>
                </div>
            </header>
            {/* ==================== Header End Here ==================== */}
        </>

    )
}

export default HeaderOne