/* eslint-env mocha*/
import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import Promotions from '../../src/components/product/Promotions';
import catalogDummyData from '../../src/lib/item-data.json';

describe('Promotions', () => {
    const catalogData = catalogDummyData || {};
    const catalogProductsData = catalogData.CatalogEntryView || [];
    const productData = catalogProductsData[0] || {};
    const promotions = productData.Promotions;


    it('Render Promotion Container', () => {
        const element = mount(<Promotions promotions={promotions} />);
        expect(element.find('.promotion-container').length).to.equal(1);
    });

    it('Render Promotion Text', () => {
        const element = mount(<Promotions promotions={promotions} />);
        expect(element.find('.promotion-text').length).to.equal(2);
        expect(element.find('.promotion-text').at(0).text()).to.equal('SPEND $50, GET FREE SHIPPING');
        expect(element.find('.promotion-text').at(1).text()).to.equal('$25 gift card with purchase of a select Ninja Blender');
    });
});
