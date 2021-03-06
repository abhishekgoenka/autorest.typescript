/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { AutoRestHeadExceptionTestServiceContext } from "./autoRestHeadExceptionTestServiceContext";


class AutoRestHeadExceptionTestService extends AutoRestHeadExceptionTestServiceContext {
  // Operation groups
  headException: operations.HeadException;

  /**
   * Initializes a new instance of the AutoRestHeadExceptionTestService class.
   * @param credentials Credentials needed for the client to connect to Azure.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, options?: Models.AutoRestHeadExceptionTestServiceOptions) {
    super(credentials, options);
    this.headException = new operations.HeadException(this);
  }
}

// Operation Specifications

export {
  AutoRestHeadExceptionTestService,
  AutoRestHeadExceptionTestServiceContext,
  Models as AutoRestHeadExceptionTestServiceModels,
  Mappers as AutoRestHeadExceptionTestServiceMappers
};
export * from "./operations";
