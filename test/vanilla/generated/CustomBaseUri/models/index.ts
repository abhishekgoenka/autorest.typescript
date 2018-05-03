/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { ServiceClientOptions } from "ms-rest-js";


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
 * An interface representing AutoRestParameterizedHostTestClientOptions.
 * @extends ServiceClientOptions
 */
export interface AutoRestParameterizedHostTestClientOptions extends ServiceClientOptions {
  /**
   * @member {string} [host] A string value that is used as a global part of
   * the parameterized host. Default value: 'host' .
   */
  host?: string;
}