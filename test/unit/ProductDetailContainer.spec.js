/* eslint-env mocha*/
import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import ProductDetailContainer from '../../src/components/product/ProductDetailContainer';
import catalogDummyData from '../../src/lib/item-data.json';

describe('ProductDetailContainer', () => {
    const catalogData = catalogDummyData || {};
    const catalogProductsData = catalogData.CatalogEntryView || [];
    const productData = catalogProductsData[0] || {};

    it('Render Product Carousel', () => {
        const element = mount(<ProductDetailContainer productData={productData} />);
        expect(element.find('.product-carousel').length).to.equal(1);
    });

    it('Render Product Title', () => {
        const element = mount(<ProductDetailContainer productData={productData} />);
        expect(element.find('.product-title').length).to.equal(1);
        expect(element.find('.product-title').text()).to.equal(productData.title);
    });

    it('Render Product Price', () => {
        const element = mount(<ProductDetailContainer productData={productData} />);
        expect(element.find('.product-price').length).to.equal(1);
    });

    it('Render Quantity Select', () => {
        const element = mount(<ProductDetailContainer productData={productData} />);
        expect(element.find('.quantity-container').length).to.equal(1);
    });
});
