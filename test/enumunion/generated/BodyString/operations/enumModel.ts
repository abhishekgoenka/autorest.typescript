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
import * as Mappers from "../models/enumModelMappers";
import { AutoRestSwaggerBATServiceContext } from "../autoRestSwaggerBATServiceContext";

/** Class representing a EnumModel. */
export class EnumModel {
  private readonly client: AutoRestSwaggerBATServiceContext;

  /**
   * Create a EnumModel.
   * @param {AutoRestSwaggerBATServiceContext} client Reference to the service client.
   */
  constructor(client: AutoRestSwaggerBATServiceContext) {
    this.client = client;
  }

  /**
   * Get enum value 'red color' from enumeration of 'red color', 'green-color', 'blue_color'.
   * @param [options] The optional parameters
   * @returns Promise<Models.EnumModelGetNotExpandableResponse>
   */
  getNotExpandable(options?: msRest.RequestOptionsBase): Promise<Models.EnumModelGetNotExpandableResponse>;
  /**
   * @param callback The callback
   */
  getNotExpandable(callback: msRest.ServiceCallback<Models.Colors>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getNotExpandable(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Colors>): void;
  getNotExpandable(optionsOrCallback?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Colors>, callback?: msRest.ServiceCallback<Models.Colors>): Promise<Models.EnumModelGetNotExpandableResponse> {
    return this.client.sendOperationRequest(
      {
        optionsOrCallback
      },
      getNotExpandableOperationSpec,
      callback) as Promise<Models.EnumModelGetNotExpandableResponse>;
  }

  /**
   * Sends value 'red color' from enumeration of 'red color', 'green-color', 'blue_color'
   * @param stringBody Possible values include: 'red color', 'green-color', 'blue_color'
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  putNotExpandable(stringBody: Models.Colors, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param stringBody Possible values include: 'red color', 'green-color', 'blue_color'
   * @param callback The callback
   */
  putNotExpandable(stringBody: Models.Colors, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param stringBody Possible values include: 'red color', 'green-color', 'blue_color'
   * @param options The optional parameters
   * @param callback The callback
   */
  putNotExpandable(stringBody: Models.Colors, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  putNotExpandable(stringBody: Models.Colors, optionsOrCallback?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        stringBody,
        optionsOrCallback
      },
      putNotExpandableOperationSpec,
      callback);
  }

  /**
   * Get enum value 'red color' from enumeration of 'red color', 'green-color', 'blue_color'.
   * @param [options] The optional parameters
   * @returns Promise<Models.EnumModelGetReferencedResponse>
   */
  getReferenced(options?: msRest.RequestOptionsBase): Promise<Models.EnumModelGetReferencedResponse>;
  /**
   * @param callback The callback
   */
  getReferenced(callback: msRest.ServiceCallback<Models.Colors>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getReferenced(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Colors>): void;
  getReferenced(optionsOrCallback?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Colors>, callback?: msRest.ServiceCallback<Models.Colors>): Promise<Models.EnumModelGetReferencedResponse> {
    return this.client.sendOperationRequest(
      {
        optionsOrCallback
      },
      getReferencedOperationSpec,
      callback) as Promise<Models.EnumModelGetReferencedResponse>;
  }

  /**
   * Sends value 'red color' from enumeration of 'red color', 'green-color', 'blue_color'
   * @param enumStringBody Possible values include: 'red color', 'green-color', 'blue_color'
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  putReferenced(enumStringBody: Models.Colors, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param enumStringBody Possible values include: 'red color', 'green-color', 'blue_color'
   * @param callback The callback
   */
  putReferenced(enumStringBody: Models.Colors, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param enumStringBody Possible values include: 'red color', 'green-color', 'blue_color'
   * @param options The optional parameters
   * @param callback The callback
   */
  putReferenced(enumStringBody: Models.Colors, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  putReferenced(enumStringBody: Models.Colors, optionsOrCallback?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        enumStringBody,
        optionsOrCallback
      },
      putReferencedOperationSpec,
      callback);
  }

  /**
   * Get value 'green-color' from the constant.
   * @param [options] The optional parameters
   * @returns Promise<Models.EnumModelGetReferencedConstantResponse>
   */
  getReferencedConstant(options?: msRest.RequestOptionsBase): Promise<Models.EnumModelGetReferencedConstantResponse>;
  /**
   * @param callback The callback
   */
  getReferencedConstant(callback: msRest.ServiceCallback<Models.RefColorConstant>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getReferencedConstant(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RefColorConstant>): void;
  getReferencedConstant(optionsOrCallback?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.RefColorConstant>, callback?: msRest.ServiceCallback<Models.RefColorConstant>): Promise<Models.EnumModelGetReferencedConstantResponse> {
    return this.client.sendOperationRequest(
      {
        optionsOrCallback
      },
      getReferencedConstantOperationSpec,
      callback) as Promise<Models.EnumModelGetReferencedConstantResponse>;
  }

  /**
   * Sends value 'green-color' from a constant
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  putReferencedConstant(options?: Models.EnumModelPutReferencedConstantOptionalParams): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  putReferencedConstant(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  putReferencedConstant(options: Models.EnumModelPutReferencedConstantOptionalParams, callback: msRest.ServiceCallback<void>): void;
  putReferencedConstant(optionsOrCallback?: Models.EnumModelPutReferencedConstantOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        optionsOrCallback
      },
      putReferencedConstantOperationSpec,
      callback);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getNotExpandableOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "string/enum/notExpandable",
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Enum",
          allowedValues: [
            "red color",
            "green-color",
            "blue_color"
          ]
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const putNotExpandableOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "string/enum/notExpandable",
  requestBody: {
    parameterPath: "stringBody",
    mapper: {
      required: true,
      serializedName: "stringBody",
      type: {
        name: "Enum",
        allowedValues: [
          "red color",
          "green-color",
          "blue_color"
        ]
      }
    }
  },
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getReferencedOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "string/enum/Referenced",
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Enum",
          allowedValues: [
            "red color",
            "green-color",
            "blue_color"
          ]
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const putReferencedOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "string/enum/Referenced",
  requestBody: {
    parameterPath: "enumStringBody",
    mapper: {
      required: true,
      serializedName: "enumStringBody",
      type: {
        name: "Enum",
        allowedValues: [
          "red color",
          "green-color",
          "blue_color"
        ]
      }
    }
  },
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getReferencedConstantOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "string/enum/ReferencedConstant",
  responses: {
    200: {
      bodyMapper: Mappers.RefColorConstant
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const putReferencedConstantOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "string/enum/ReferencedConstant",
  requestBody: {
    parameterPath: {
      field1: [
        "options",
        "field1"
      ]
    },
    mapper: {
      ...Mappers.RefColorConstant,
      required: true
    }
  },
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};
