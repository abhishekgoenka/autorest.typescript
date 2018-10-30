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
import * as Mappers from "../models/odataMappers";
import * as Parameters from "../models/parameters";
import { AutoRestAzureSpecialParametersTestClientContext } from "../autoRestAzureSpecialParametersTestClientContext";

/** Class representing a Odata. */
export class Odata {
  private readonly client: AutoRestAzureSpecialParametersTestClientContext;

  /**
   * Create a Odata.
   * @param {AutoRestAzureSpecialParametersTestClientContext} client Reference to the service client.
   */
  constructor(client: AutoRestAzureSpecialParametersTestClientContext) {
    this.client = client;
  }

  /**
   * Specify filter parameter with value '$filter=id gt 5 and name eq 'foo'&$orderby=id&$top=10'
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  getWithFilter(options?: Models.OdataGetWithFilterOptionalParams): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  getWithFilter(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getWithFilter(options: Models.OdataGetWithFilterOptionalParams, callback: msRest.ServiceCallback<void>): void;
  getWithFilter(optionsOrCallback?: Models.OdataGetWithFilterOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        optionsOrCallback
      },
      getWithFilterOperationSpec,
      callback);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getWithFilterOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "azurespecials/odata/filter",
  queryParameters: [
    Parameters.filter,
    Parameters.top,
    Parameters.orderby
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
