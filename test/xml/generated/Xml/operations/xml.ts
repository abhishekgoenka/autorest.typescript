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
import * as Models from "../models";
import * as Mappers from "../models/xmlMappers";
import * as Parameters from "../models/parameters";
import { AutoRestSwaggerBATXMLServiceContext } from "../autoRestSwaggerBATXMLServiceContext";

/** Class representing a Xml. */
export class Xml {
  private readonly client: AutoRestSwaggerBATXMLServiceContext;

  /**
   * Create a Xml.
   * @param {AutoRestSwaggerBATXMLServiceContext} client Reference to the service client.
   */
  constructor(client: AutoRestSwaggerBATXMLServiceContext) {
    this.client = client;
  }

  /**
   * Get a complex type that has a ref to a complex type with no XML node
   * @param [options] The optional parameters
   * @returns Promise<Models.XmlGetComplexTypeRefNoMetaResponse>
   */
  getComplexTypeRefNoMeta(options?: msRest.RequestOptionsBase): Promise<Models.XmlGetComplexTypeRefNoMetaResponse>;
  /**
   * @param callback The callback
   */
  getComplexTypeRefNoMeta(callback: msRest.ServiceCallback<Models.RootWithRefAndNoMeta>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getComplexTypeRefNoMeta(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RootWithRefAndNoMeta>): void;
  getComplexTypeRefNoMeta(optionsOrCallback?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.RootWithRefAndNoMeta>, callback?: msRest.ServiceCallback<Models.RootWithRefAndNoMeta>): Promise<Models.XmlGetComplexTypeRefNoMetaResponse> {
    return this.client.sendOperationRequest(
      {
        optionsOrCallback
      },
      getComplexTypeRefNoMetaOperationSpec,
      callback) as Promise<Models.XmlGetComplexTypeRefNoMetaResponse>;
  }

  /**
   * Puts a complex type that has a ref to a complex type with no XML node
   * @param model
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  putComplexTypeRefNoMeta(model: Models.RootWithRefAndNoMeta, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param model
   * @param callback The callback
   */
  putComplexTypeRefNoMeta(model: Models.RootWithRefAndNoMeta, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param model
   * @param options The optional parameters
   * @param callback The callback
   */
  putComplexTypeRefNoMeta(model: Models.RootWithRefAndNoMeta, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  putComplexTypeRefNoMeta(model: Models.RootWithRefAndNoMeta, optionsOrCallback?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        model,
        optionsOrCallback
      },
      putComplexTypeRefNoMetaOperationSpec,
      callback);
  }

  /**
   * Get a complex type that has a ref to a complex type with XML node
   * @param [options] The optional parameters
   * @returns Promise<Models.XmlGetComplexTypeRefWithMetaResponse>
   */
  getComplexTypeRefWithMeta(options?: msRest.RequestOptionsBase): Promise<Models.XmlGetComplexTypeRefWithMetaResponse>;
  /**
   * @param callback The callback
   */
  getComplexTypeRefWithMeta(callback: msRest.ServiceCallback<Models.RootWithRefAndMeta>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getComplexTypeRefWithMeta(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RootWithRefAndMeta>): void;
  getComplexTypeRefWithMeta(optionsOrCallback?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.RootWithRefAndMeta>, callback?: msRest.ServiceCallback<Models.RootWithRefAndMeta>): Promise<Models.XmlGetComplexTypeRefWithMetaResponse> {
    return this.client.sendOperationRequest(
      {
        optionsOrCallback
      },
      getComplexTypeRefWithMetaOperationSpec,
      callback) as Promise<Models.XmlGetComplexTypeRefWithMetaResponse>;
  }

  /**
   * Puts a complex type that has a ref to a complex type with XML node
   * @param model
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  putComplexTypeRefWithMeta(model: Models.RootWithRefAndMeta, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param model
   * @param callback The callback
   */
  putComplexTypeRefWithMeta(model: Models.RootWithRefAndMeta, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param model
   * @param options The optional parameters
   * @param callback The callback
   */
  putComplexTypeRefWithMeta(model: Models.RootWithRefAndMeta, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  putComplexTypeRefWithMeta(model: Models.RootWithRefAndMeta, optionsOrCallback?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        model,
        optionsOrCallback
      },
      putComplexTypeRefWithMetaOperationSpec,
      callback);
  }

  /**
   * Get a simple XML document
   * @param [options] The optional parameters
   * @returns Promise<Models.XmlGetSimpleResponse>
   */
  getSimple(options?: msRest.RequestOptionsBase): Promise<Models.XmlGetSimpleResponse>;
  /**
   * @param callback The callback
   */
  getSimple(callback: msRest.ServiceCallback<Models.Slideshow>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getSimple(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Slideshow>): void;
  getSimple(optionsOrCallback?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Slideshow>, callback?: msRest.ServiceCallback<Models.Slideshow>): Promise<Models.XmlGetSimpleResponse> {
    return this.client.sendOperationRequest(
      {
        optionsOrCallback
      },
      getSimpleOperationSpec,
      callback) as Promise<Models.XmlGetSimpleResponse>;
  }

  /**
   * Put a simple XML document
   * @param slideshow
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  putSimple(slideshow: Models.Slideshow, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param slideshow
   * @param callback The callback
   */
  putSimple(slideshow: Models.Slideshow, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param slideshow
   * @param options The optional parameters
   * @param callback The callback
   */
  putSimple(slideshow: Models.Slideshow, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  putSimple(slideshow: Models.Slideshow, optionsOrCallback?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        slideshow,
        optionsOrCallback
      },
      putSimpleOperationSpec,
      callback);
  }

  /**
   * Get an XML document with multiple wrapped lists
   * @param [options] The optional parameters
   * @returns Promise<Models.XmlGetWrappedListsResponse>
   */
  getWrappedLists(options?: msRest.RequestOptionsBase): Promise<Models.XmlGetWrappedListsResponse>;
  /**
   * @param callback The callback
   */
  getWrappedLists(callback: msRest.ServiceCallback<Models.AppleBarrel>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getWrappedLists(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AppleBarrel>): void;
  getWrappedLists(optionsOrCallback?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AppleBarrel>, callback?: msRest.ServiceCallback<Models.AppleBarrel>): Promise<Models.XmlGetWrappedListsResponse> {
    return this.client.sendOperationRequest(
      {
        optionsOrCallback
      },
      getWrappedListsOperationSpec,
      callback) as Promise<Models.XmlGetWrappedListsResponse>;
  }

  /**
   * Put an XML document with multiple wrapped lists
   * @param wrappedLists
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  putWrappedLists(wrappedLists: Models.AppleBarrel, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param wrappedLists
   * @param callback The callback
   */
  putWrappedLists(wrappedLists: Models.AppleBarrel, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param wrappedLists
   * @param options The optional parameters
   * @param callback The callback
   */
  putWrappedLists(wrappedLists: Models.AppleBarrel, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  putWrappedLists(wrappedLists: Models.AppleBarrel, optionsOrCallback?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        wrappedLists,
        optionsOrCallback
      },
      putWrappedListsOperationSpec,
      callback);
  }

  /**
   * Get strongly-typed response headers.
   * @param [options] The optional parameters
   * @returns Promise<Models.XmlGetHeadersResponse>
   */
  getHeaders(options?: msRest.RequestOptionsBase): Promise<Models.XmlGetHeadersResponse>;
  /**
   * @param callback The callback
   */
  getHeaders(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getHeaders(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  getHeaders(optionsOrCallback?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<Models.XmlGetHeadersResponse> {
    return this.client.sendOperationRequest(
      {
        optionsOrCallback
      },
      getHeadersOperationSpec,
      callback) as Promise<Models.XmlGetHeadersResponse>;
  }

  /**
   * Get an empty list.
   * @param [options] The optional parameters
   * @returns Promise<Models.XmlGetEmptyListResponse>
   */
  getEmptyList(options?: msRest.RequestOptionsBase): Promise<Models.XmlGetEmptyListResponse>;
  /**
   * @param callback The callback
   */
  getEmptyList(callback: msRest.ServiceCallback<Models.Slideshow>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getEmptyList(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Slideshow>): void;
  getEmptyList(optionsOrCallback?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Slideshow>, callback?: msRest.ServiceCallback<Models.Slideshow>): Promise<Models.XmlGetEmptyListResponse> {
    return this.client.sendOperationRequest(
      {
        optionsOrCallback
      },
      getEmptyListOperationSpec,
      callback) as Promise<Models.XmlGetEmptyListResponse>;
  }

  /**
   * Puts an empty list.
   * @param slideshow
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  putEmptyList(slideshow: Models.Slideshow, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param slideshow
   * @param callback The callback
   */
  putEmptyList(slideshow: Models.Slideshow, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param slideshow
   * @param options The optional parameters
   * @param callback The callback
   */
  putEmptyList(slideshow: Models.Slideshow, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  putEmptyList(slideshow: Models.Slideshow, optionsOrCallback?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        slideshow,
        optionsOrCallback
      },
      putEmptyListOperationSpec,
      callback);
  }

  /**
   * Gets some empty wrapped lists.
   * @param [options] The optional parameters
   * @returns Promise<Models.XmlGetEmptyWrappedListsResponse>
   */
  getEmptyWrappedLists(options?: msRest.RequestOptionsBase): Promise<Models.XmlGetEmptyWrappedListsResponse>;
  /**
   * @param callback The callback
   */
  getEmptyWrappedLists(callback: msRest.ServiceCallback<Models.AppleBarrel>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getEmptyWrappedLists(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AppleBarrel>): void;
  getEmptyWrappedLists(optionsOrCallback?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AppleBarrel>, callback?: msRest.ServiceCallback<Models.AppleBarrel>): Promise<Models.XmlGetEmptyWrappedListsResponse> {
    return this.client.sendOperationRequest(
      {
        optionsOrCallback
      },
      getEmptyWrappedListsOperationSpec,
      callback) as Promise<Models.XmlGetEmptyWrappedListsResponse>;
  }

  /**
   * Puts some empty wrapped lists.
   * @param appleBarrel
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  putEmptyWrappedLists(appleBarrel: Models.AppleBarrel, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param appleBarrel
   * @param callback The callback
   */
  putEmptyWrappedLists(appleBarrel: Models.AppleBarrel, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param appleBarrel
   * @param options The optional parameters
   * @param callback The callback
   */
  putEmptyWrappedLists(appleBarrel: Models.AppleBarrel, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  putEmptyWrappedLists(appleBarrel: Models.AppleBarrel, optionsOrCallback?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        appleBarrel,
        optionsOrCallback
      },
      putEmptyWrappedListsOperationSpec,
      callback);
  }

  /**
   * Gets a list as the root element.
   * @param [options] The optional parameters
   * @returns Promise<Models.XmlGetRootListResponse>
   */
  getRootList(options?: msRest.RequestOptionsBase): Promise<Models.XmlGetRootListResponse>;
  /**
   * @param callback The callback
   */
  getRootList(callback: msRest.ServiceCallback<Models.Banana[]>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getRootList(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Banana[]>): void;
  getRootList(optionsOrCallback?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Banana[]>, callback?: msRest.ServiceCallback<Models.Banana[]>): Promise<Models.XmlGetRootListResponse> {
    return this.client.sendOperationRequest(
      {
        optionsOrCallback
      },
      getRootListOperationSpec,
      callback) as Promise<Models.XmlGetRootListResponse>;
  }

  /**
   * Puts a list as the root element.
   * @param bananas
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  putRootList(bananas: Models.Banana[], options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param bananas
   * @param callback The callback
   */
  putRootList(bananas: Models.Banana[], callback: msRest.ServiceCallback<void>): void;
  /**
   * @param bananas
   * @param options The optional parameters
   * @param callback The callback
   */
  putRootList(bananas: Models.Banana[], options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  putRootList(bananas: Models.Banana[], optionsOrCallback?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        bananas,
        optionsOrCallback
      },
      putRootListOperationSpec,
      callback);
  }

  /**
   * Gets a list with a single item.
   * @param [options] The optional parameters
   * @returns Promise<Models.XmlGetRootListSingleItemResponse>
   */
  getRootListSingleItem(options?: msRest.RequestOptionsBase): Promise<Models.XmlGetRootListSingleItemResponse>;
  /**
   * @param callback The callback
   */
  getRootListSingleItem(callback: msRest.ServiceCallback<Models.Banana[]>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getRootListSingleItem(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Banana[]>): void;
  getRootListSingleItem(optionsOrCallback?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Banana[]>, callback?: msRest.ServiceCallback<Models.Banana[]>): Promise<Models.XmlGetRootListSingleItemResponse> {
    return this.client.sendOperationRequest(
      {
        optionsOrCallback
      },
      getRootListSingleItemOperationSpec,
      callback) as Promise<Models.XmlGetRootListSingleItemResponse>;
  }

  /**
   * Puts a list with a single item.
   * @param bananas
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  putRootListSingleItem(bananas: Models.Banana[], options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param bananas
   * @param callback The callback
   */
  putRootListSingleItem(bananas: Models.Banana[], callback: msRest.ServiceCallback<void>): void;
  /**
   * @param bananas
   * @param options The optional parameters
   * @param callback The callback
   */
  putRootListSingleItem(bananas: Models.Banana[], options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  putRootListSingleItem(bananas: Models.Banana[], optionsOrCallback?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        bananas,
        optionsOrCallback
      },
      putRootListSingleItemOperationSpec,
      callback);
  }

  /**
   * Gets an empty list as the root element.
   * @param [options] The optional parameters
   * @returns Promise<Models.XmlGetEmptyRootListResponse>
   */
  getEmptyRootList(options?: msRest.RequestOptionsBase): Promise<Models.XmlGetEmptyRootListResponse>;
  /**
   * @param callback The callback
   */
  getEmptyRootList(callback: msRest.ServiceCallback<Models.Banana[]>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getEmptyRootList(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Banana[]>): void;
  getEmptyRootList(optionsOrCallback?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Banana[]>, callback?: msRest.ServiceCallback<Models.Banana[]>): Promise<Models.XmlGetEmptyRootListResponse> {
    return this.client.sendOperationRequest(
      {
        optionsOrCallback
      },
      getEmptyRootListOperationSpec,
      callback) as Promise<Models.XmlGetEmptyRootListResponse>;
  }

  /**
   * Puts an empty list as the root element.
   * @param bananas
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  putEmptyRootList(bananas: Models.Banana[], options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param bananas
   * @param callback The callback
   */
  putEmptyRootList(bananas: Models.Banana[], callback: msRest.ServiceCallback<void>): void;
  /**
   * @param bananas
   * @param options The optional parameters
   * @param callback The callback
   */
  putEmptyRootList(bananas: Models.Banana[], options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  putEmptyRootList(bananas: Models.Banana[], optionsOrCallback?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        bananas,
        optionsOrCallback
      },
      putEmptyRootListOperationSpec,
      callback);
  }

  /**
   * Gets an XML document with an empty child element.
   * @param [options] The optional parameters
   * @returns Promise<Models.XmlGetEmptyChildElementResponse>
   */
  getEmptyChildElement(options?: msRest.RequestOptionsBase): Promise<Models.XmlGetEmptyChildElementResponse>;
  /**
   * @param callback The callback
   */
  getEmptyChildElement(callback: msRest.ServiceCallback<Models.Banana>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getEmptyChildElement(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Banana>): void;
  getEmptyChildElement(optionsOrCallback?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Banana>, callback?: msRest.ServiceCallback<Models.Banana>): Promise<Models.XmlGetEmptyChildElementResponse> {
    return this.client.sendOperationRequest(
      {
        optionsOrCallback
      },
      getEmptyChildElementOperationSpec,
      callback) as Promise<Models.XmlGetEmptyChildElementResponse>;
  }

  /**
   * Puts a value with an empty child element.
   * @param banana
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  putEmptyChildElement(banana: Models.Banana, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param banana
   * @param callback The callback
   */
  putEmptyChildElement(banana: Models.Banana, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param banana
   * @param options The optional parameters
   * @param callback The callback
   */
  putEmptyChildElement(banana: Models.Banana, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  putEmptyChildElement(banana: Models.Banana, optionsOrCallback?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        banana,
        optionsOrCallback
      },
      putEmptyChildElementOperationSpec,
      callback);
  }

  /**
   * Lists containers in a storage account.
   * @param [options] The optional parameters
   * @returns Promise<Models.XmlListContainersResponse>
   */
  listContainers(options?: msRest.RequestOptionsBase): Promise<Models.XmlListContainersResponse>;
  /**
   * @param callback The callback
   */
  listContainers(callback: msRest.ServiceCallback<Models.ListContainersResponse>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  listContainers(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ListContainersResponse>): void;
  listContainers(optionsOrCallback?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ListContainersResponse>, callback?: msRest.ServiceCallback<Models.ListContainersResponse>): Promise<Models.XmlListContainersResponse> {
    return this.client.sendOperationRequest(
      {
        optionsOrCallback
      },
      listContainersOperationSpec,
      callback) as Promise<Models.XmlListContainersResponse>;
  }

  /**
   * Gets storage service properties.
   * @param [options] The optional parameters
   * @returns Promise<Models.XmlGetServicePropertiesResponse>
   */
  getServiceProperties(options?: msRest.RequestOptionsBase): Promise<Models.XmlGetServicePropertiesResponse>;
  /**
   * @param callback The callback
   */
  getServiceProperties(callback: msRest.ServiceCallback<Models.StorageServiceProperties>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getServiceProperties(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.StorageServiceProperties>): void;
  getServiceProperties(optionsOrCallback?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.StorageServiceProperties>, callback?: msRest.ServiceCallback<Models.StorageServiceProperties>): Promise<Models.XmlGetServicePropertiesResponse> {
    return this.client.sendOperationRequest(
      {
        optionsOrCallback
      },
      getServicePropertiesOperationSpec,
      callback) as Promise<Models.XmlGetServicePropertiesResponse>;
  }

  /**
   * Puts storage service properties.
   * @param properties
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  putServiceProperties(properties: Models.StorageServiceProperties, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param properties
   * @param callback The callback
   */
  putServiceProperties(properties: Models.StorageServiceProperties, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param properties
   * @param options The optional parameters
   * @param callback The callback
   */
  putServiceProperties(properties: Models.StorageServiceProperties, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  putServiceProperties(properties: Models.StorageServiceProperties, optionsOrCallback?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        properties,
        optionsOrCallback
      },
      putServicePropertiesOperationSpec,
      callback);
  }

  /**
   * Gets storage ACLs for a container.
   * @param [options] The optional parameters
   * @returns Promise<Models.XmlGetAclsResponse>
   */
  getAcls(options?: msRest.RequestOptionsBase): Promise<Models.XmlGetAclsResponse>;
  /**
   * @param callback The callback
   */
  getAcls(callback: msRest.ServiceCallback<Models.SignedIdentifier[]>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getAcls(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SignedIdentifier[]>): void;
  getAcls(optionsOrCallback?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SignedIdentifier[]>, callback?: msRest.ServiceCallback<Models.SignedIdentifier[]>): Promise<Models.XmlGetAclsResponse> {
    return this.client.sendOperationRequest(
      {
        optionsOrCallback
      },
      getAclsOperationSpec,
      callback) as Promise<Models.XmlGetAclsResponse>;
  }

  /**
   * Puts storage ACLs for a container.
   * @param properties
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  putAcls(properties: Models.SignedIdentifier[], options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param properties
   * @param callback The callback
   */
  putAcls(properties: Models.SignedIdentifier[], callback: msRest.ServiceCallback<void>): void;
  /**
   * @param properties
   * @param options The optional parameters
   * @param callback The callback
   */
  putAcls(properties: Models.SignedIdentifier[], options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  putAcls(properties: Models.SignedIdentifier[], optionsOrCallback?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        properties,
        optionsOrCallback
      },
      putAclsOperationSpec,
      callback);
  }

  /**
   * Lists blobs in a storage container.
   * @param [options] The optional parameters
   * @returns Promise<Models.XmlListBlobsResponse>
   */
  listBlobs(options?: msRest.RequestOptionsBase): Promise<Models.XmlListBlobsResponse>;
  /**
   * @param callback The callback
   */
  listBlobs(callback: msRest.ServiceCallback<Models.ListBlobsResponse>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  listBlobs(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ListBlobsResponse>): void;
  listBlobs(optionsOrCallback?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ListBlobsResponse>, callback?: msRest.ServiceCallback<Models.ListBlobsResponse>): Promise<Models.XmlListBlobsResponse> {
    return this.client.sendOperationRequest(
      {
        optionsOrCallback
      },
      listBlobsOperationSpec,
      callback) as Promise<Models.XmlListBlobsResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers, true);
const getComplexTypeRefNoMetaOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "xml/complex-type-ref-no-meta",
  responses: {
    200: {
      bodyMapper: Mappers.RootWithRefAndNoMeta
    },
    default: {}
  },
  isXML: true,
  serializer
};

const putComplexTypeRefNoMetaOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "xml/complex-type-ref-no-meta",
  requestBody: {
    parameterPath: "model",
    mapper: {
      ...Mappers.RootWithRefAndNoMeta,
      required: true
    }
  },
  contentType: "application/xml; charset=utf-8",
  responses: {
    201: {},
    default: {}
  },
  isXML: true,
  serializer
};

const getComplexTypeRefWithMetaOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "xml/complex-type-ref-with-meta",
  responses: {
    200: {
      bodyMapper: Mappers.RootWithRefAndMeta
    },
    default: {}
  },
  isXML: true,
  serializer
};

const putComplexTypeRefWithMetaOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "xml/complex-type-ref-with-meta",
  requestBody: {
    parameterPath: "model",
    mapper: {
      ...Mappers.RootWithRefAndMeta,
      required: true
    }
  },
  contentType: "application/xml; charset=utf-8",
  responses: {
    201: {},
    default: {}
  },
  isXML: true,
  serializer
};

const getSimpleOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "xml/simple",
  responses: {
    200: {
      bodyMapper: Mappers.Slideshow
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  isXML: true,
  serializer
};

const putSimpleOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "xml/simple",
  requestBody: {
    parameterPath: "slideshow",
    mapper: {
      ...Mappers.Slideshow,
      required: true
    }
  },
  contentType: "application/xml; charset=utf-8",
  responses: {
    201: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  isXML: true,
  serializer
};

const getWrappedListsOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "xml/wrapped-lists",
  responses: {
    200: {
      bodyMapper: Mappers.AppleBarrel
    },
    default: {}
  },
  isXML: true,
  serializer
};

const putWrappedListsOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "xml/wrapped-lists",
  requestBody: {
    parameterPath: "wrappedLists",
    mapper: {
      ...Mappers.AppleBarrel,
      required: true
    }
  },
  contentType: "application/xml; charset=utf-8",
  responses: {
    201: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  isXML: true,
  serializer
};

const getHeadersOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "xml/headers",
  responses: {
    200: {
      headersMapper: Mappers.XmlGetHeadersHeaders
    },
    default: {}
  },
  isXML: true,
  serializer
};

const getEmptyListOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "xml/empty-list",
  responses: {
    200: {
      bodyMapper: Mappers.Slideshow
    },
    default: {}
  },
  isXML: true,
  serializer
};

const putEmptyListOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "xml/empty-list",
  requestBody: {
    parameterPath: "slideshow",
    mapper: {
      ...Mappers.Slideshow,
      required: true
    }
  },
  contentType: "application/xml; charset=utf-8",
  responses: {
    201: {},
    default: {}
  },
  isXML: true,
  serializer
};

const getEmptyWrappedListsOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "xml/empty-wrapped-lists",
  responses: {
    200: {
      bodyMapper: Mappers.AppleBarrel
    },
    default: {}
  },
  isXML: true,
  serializer
};

const putEmptyWrappedListsOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "xml/empty-wrapped-lists",
  requestBody: {
    parameterPath: "appleBarrel",
    mapper: {
      ...Mappers.AppleBarrel,
      required: true
    }
  },
  contentType: "application/xml; charset=utf-8",
  responses: {
    201: {},
    default: {}
  },
  isXML: true,
  serializer
};

const getRootListOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "xml/root-list",
  responses: {
    200: {
      bodyMapper: {
        xmlElementName: "banana",
        serializedName: "parsedResponse",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Banana"
            }
          }
        }
      }
    },
    default: {}
  },
  isXML: true,
  serializer
};

const putRootListOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "xml/root-list",
  requestBody: {
    parameterPath: "bananas",
    mapper: {
      xmlElementName: "banana",
      required: true,
      serializedName: "bananas",
      type: {
        name: "Sequence",
        element: {
          type: {
            name: "Composite",
            className: "Banana"
          }
        }
      }
    }
  },
  contentType: "application/xml; charset=utf-8",
  responses: {
    201: {},
    default: {}
  },
  isXML: true,
  serializer
};

const getRootListSingleItemOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "xml/root-list-single-item",
  responses: {
    200: {
      bodyMapper: {
        xmlElementName: "banana",
        serializedName: "parsedResponse",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Banana"
            }
          }
        }
      }
    },
    default: {}
  },
  isXML: true,
  serializer
};

const putRootListSingleItemOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "xml/root-list-single-item",
  requestBody: {
    parameterPath: "bananas",
    mapper: {
      xmlElementName: "banana",
      required: true,
      serializedName: "bananas",
      type: {
        name: "Sequence",
        element: {
          type: {
            name: "Composite",
            className: "Banana"
          }
        }
      }
    }
  },
  contentType: "application/xml; charset=utf-8",
  responses: {
    201: {},
    default: {}
  },
  isXML: true,
  serializer
};

const getEmptyRootListOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "xml/empty-root-list",
  responses: {
    200: {
      bodyMapper: {
        xmlElementName: "banana",
        serializedName: "parsedResponse",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Banana"
            }
          }
        }
      }
    },
    default: {}
  },
  isXML: true,
  serializer
};

const putEmptyRootListOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "xml/empty-root-list",
  requestBody: {
    parameterPath: "bananas",
    mapper: {
      xmlElementName: "banana",
      required: true,
      serializedName: "bananas",
      type: {
        name: "Sequence",
        element: {
          type: {
            name: "Composite",
            className: "Banana"
          }
        }
      }
    }
  },
  contentType: "application/xml; charset=utf-8",
  responses: {
    201: {},
    default: {}
  },
  isXML: true,
  serializer
};

const getEmptyChildElementOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "xml/empty-child-element",
  responses: {
    200: {
      bodyMapper: Mappers.Banana
    },
    default: {}
  },
  isXML: true,
  serializer
};

const putEmptyChildElementOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "xml/empty-child-element",
  requestBody: {
    parameterPath: "banana",
    mapper: {
      ...Mappers.Banana,
      required: true
    }
  },
  contentType: "application/xml; charset=utf-8",
  responses: {
    201: {},
    default: {}
  },
  isXML: true,
  serializer
};

const listContainersOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "xml/",
  queryParameters: [
    Parameters.comp0
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ListContainersResponse
    },
    default: {}
  },
  isXML: true,
  serializer
};

const getServicePropertiesOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "xml/",
  queryParameters: [
    Parameters.comp1,
    Parameters.restype0
  ],
  responses: {
    200: {
      bodyMapper: Mappers.StorageServiceProperties
    },
    default: {}
  },
  isXML: true,
  serializer
};

const putServicePropertiesOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "xml/",
  queryParameters: [
    Parameters.comp1,
    Parameters.restype0
  ],
  requestBody: {
    parameterPath: "properties",
    mapper: {
      ...Mappers.StorageServiceProperties,
      required: true
    }
  },
  contentType: "application/xml; charset=utf-8",
  responses: {
    201: {},
    default: {}
  },
  isXML: true,
  serializer
};

const getAclsOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "xml/mycontainer",
  queryParameters: [
    Parameters.comp2,
    Parameters.restype1
  ],
  responses: {
    200: {
      bodyMapper: {
        xmlElementName: "SignedIdentifier",
        serializedName: "parsedResponse",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SignedIdentifier"
            }
          }
        }
      }
    },
    default: {}
  },
  isXML: true,
  serializer
};

const putAclsOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "xml/mycontainer",
  queryParameters: [
    Parameters.comp2,
    Parameters.restype1
  ],
  requestBody: {
    parameterPath: "properties",
    mapper: {
      xmlName: "SignedIdentifiers",
      xmlElementName: "SignedIdentifier",
      required: true,
      serializedName: "properties",
      type: {
        name: "Sequence",
        element: {
          type: {
            name: "Composite",
            className: "SignedIdentifier"
          }
        }
      }
    }
  },
  contentType: "application/xml; charset=utf-8",
  responses: {
    201: {},
    default: {}
  },
  isXML: true,
  serializer
};

const listBlobsOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "xml/mycontainer",
  queryParameters: [
    Parameters.comp0,
    Parameters.restype1
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ListBlobsResponse
    },
    default: {}
  },
  isXML: true,
  serializer
};
