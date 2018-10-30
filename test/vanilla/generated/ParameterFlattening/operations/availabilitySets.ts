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
import * as Mappers from "../models/availabilitySetsMappers";
import * as Parameters from "../models/parameters";
import { AutoRestParameterFlatteningContext } from "../autoRestParameterFlatteningContext";

/** Class representing a AvailabilitySets. */
export class AvailabilitySets {
  private readonly client: AutoRestParameterFlatteningContext;

  /**
   * Create a AvailabilitySets.
   * @param {AutoRestParameterFlatteningContext} client Reference to the service client.
   */
  constructor(client: AutoRestParameterFlatteningContext) {
    this.client = client;
  }

  /**
   * Updates the tags for an availability set.
   * @param resourceGroupName The name of the resource group.
   * @param avset The name of the storage availability set.
   * @param tags A set of tags. A description about the set of tags.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  update(resourceGroupName: string, avset: string, tags: { [propertyName: string]: string }, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param avset The name of the storage availability set.
   * @param tags A set of tags. A description about the set of tags.
   * @param callback The callback
   */
  update(resourceGroupName: string, avset: string, tags: { [propertyName: string]: string }, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param avset The name of the storage availability set.
   * @param tags A set of tags. A description about the set of tags.
   * @param options The optional parameters
   * @param callback The callback
   */
  update(resourceGroupName: string, avset: string, tags: { [propertyName: string]: string }, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  update(resourceGroupName: string, avset: string, tags: { [propertyName: string]: string }, optionsOrCallback?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        avset,
        tags,
        optionsOrCallback
      },
      updateOperationSpec,
      callback);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "parameterFlattening/{resourceGroupName}/{availabilitySetName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.avset
  ],
  requestBody: {
    parameterPath: {
      tags: "tags"
    },
    mapper: {
      ...Mappers.AvailabilitySetUpdateParameters,
      required: true
    }
  },
  responses: {
    200: {},
    default: {}
  },
  serializer
};
