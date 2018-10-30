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
import * as Mappers from "../models/apiVersionLocalMappers";
import * as Parameters from "../models/parameters";
import { AutoRestAzureSpecialParametersTestClientContext } from "../autoRestAzureSpecialParametersTestClientContext";

/** Class representing a ApiVersionLocal. */
export class ApiVersionLocal {
  private readonly client: AutoRestAzureSpecialParametersTestClientContext;

  /**
   * Create a ApiVersionLocal.
   * @param {AutoRestAzureSpecialParametersTestClientContext} client Reference to the service client.
   */
  constructor(client: AutoRestAzureSpecialParametersTestClientContext) {
    this.client = client;
  }

  /**
   * Get method with api-version modeled in the method.  pass in api-version = '2.0' to succeed
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  getMethodLocalValid(options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  getMethodLocalValid(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getMethodLocalValid(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  getMethodLocalValid(optionsOrCallback?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        optionsOrCallback
      },
      getMethodLocalValidOperationSpec,
      callback);
  }

  /**
   * Get method with api-version modeled in the method.  pass in api-version = null to succeed
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  getMethodLocalNull(options?: Models.ApiVersionLocalGetMethodLocalNullOptionalParams): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  getMethodLocalNull(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getMethodLocalNull(options: Models.ApiVersionLocalGetMethodLocalNullOptionalParams, callback: msRest.ServiceCallback<void>): void;
  getMethodLocalNull(optionsOrCallback?: Models.ApiVersionLocalGetMethodLocalNullOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        optionsOrCallback
      },
      getMethodLocalNullOperationSpec,
      callback);
  }

  /**
   * Get method with api-version modeled in the method.  pass in api-version = '2.0' to succeed
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  getPathLocalValid(options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  getPathLocalValid(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getPathLocalValid(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  getPathLocalValid(optionsOrCallback?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        optionsOrCallback
      },
      getPathLocalValidOperationSpec,
      callback);
  }

  /**
   * Get method with api-version modeled in the method.  pass in api-version = '2.0' to succeed
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  getSwaggerLocalValid(options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  getSwaggerLocalValid(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getSwaggerLocalValid(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  getSwaggerLocalValid(optionsOrCallback?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        optionsOrCallback
      },
      getSwaggerLocalValidOperationSpec,
      callback);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getMethodLocalValidOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "azurespecials/apiVersion/method/string/none/query/local/2.0",
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getMethodLocalNullOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "azurespecials/apiVersion/method/string/none/query/local/null",
  queryParameters: [
    Parameters.apiVersion2
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getPathLocalValidOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "azurespecials/apiVersion/path/string/none/query/local/2.0",
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getSwaggerLocalValidOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "azurespecials/apiVersion/swagger/string/none/query/local/2.0",
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};
