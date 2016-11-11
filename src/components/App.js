import React, { Component } from 'react';
import ProductDetailContainer from './product/ProductDetailContainer';
import catalogDummyData from '../lib/item-data.json';

class App extends Component {
    render() {
        const catalogData = catalogDummyData || {};
        const catalogProductsData = catalogData.CatalogEntryView || [];
        const productData = catalogProductsData[0] || {};
        return <ProductDetailContainer productData={productData} />;
    }
}

export default App;
