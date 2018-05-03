/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
type RequestOptionsBase = msRest.RequestOptionsBase;


/**
 * @interface
 * An interface representing Product.
 * The product documentation.
 *
 */
export interface Product {
  /**
   * @member {string} [productId] Unique identifier representing a specific
   * product for a given latitude & longitude. For example, uberX in San
   * Francisco will have a different product_id than uberX in Los Angeles.
   */
  productId?: string;
  /**
   * @member {string} [description] Description of product.
   */
  description?: string;
  /**
   * @member {string} [displayName] Display name of product.
   */
  displayName?: string;
  /**
   * @member {string} [capacity] Capacity of product. For example, 4 people.
   * Default value: '100' .
   */
  capacity?: string;
  /**
   * @member {string} [image] Image URL representing the product.
   */
  image?: string;
}

/**
 * @interface
 * An interface representing CatalogDictionary.
 */
export interface CatalogDictionary {
  /**
   * @member {{ [propertyName: string]: Product }} [productDictionary]
   * Dictionary of products
   */
  productDictionary?: { [propertyName: string]: Product };
}

/**
 * @interface
 * An interface representing CatalogArray.
 */
export interface CatalogArray {
  /**
   * @member {Product[]} [productArray] Array of products
   */
  productArray?: Product[];
}

/**
 * @interface
 * An interface representing CatalogArrayOfDictionary.
 */
export interface CatalogArrayOfDictionary {
  /**
   * @member {{ [propertyName: string]: Product }[]} [productArrayOfDictionary]
   * Array of dictionary of products
   */
  productArrayOfDictionary?: { [propertyName: string]: Product }[];
}

/**
 * @interface
 * An interface representing CatalogDictionaryOfArray.
 */
export interface CatalogDictionaryOfArray {
  /**
   * @member {{ [propertyName: string]: Product[] }} [productDictionaryOfArray]
   * Dictionary of Array of product
   */
  productDictionaryOfArray?: { [propertyName: string]: Product[] };
}

/**
 * @interface
 * An interface representing ErrorModel.
 */
export interface ErrorModel {
  /**
   * @member {number} [status]
   */
  status?: number;
  /**
   * @member {string} [message]
   */
  message?: string;
}

/**
 * @interface
 * An interface representing ComplexModelClientCreateOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface ComplexModelClientCreateOptionalParams extends RequestOptionsBase {
  /**
   * @member {{ [propertyName: string]: Product[] }} [productDictionaryOfArray]
   * Dictionary of Array of product
   */
  productDictionaryOfArray?: { [propertyName: string]: Product[] };
}

/**
 * @interface
 * An interface representing ComplexModelClientUpdateOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface ComplexModelClientUpdateOptionalParams extends RequestOptionsBase {
  /**
   * @member {{ [propertyName: string]: Product }[]} [productArrayOfDictionary]
   * Array of dictionary of products
   */
  productArrayOfDictionary?: { [propertyName: string]: Product }[];
}