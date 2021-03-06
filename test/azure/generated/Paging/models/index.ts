/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { BaseResource, CloudError, AzureServiceClientOptions } from "@azure/ms-rest-azure-js";
import * as msRest from "@azure/ms-rest-js";

export { BaseResource, CloudError };

/**
 * An interface representing ProductProperties.
 */
export interface ProductProperties {
  id?: number;
  name?: string;
}

/**
 * An interface representing Product.
 */
export interface Product {
  properties?: ProductProperties;
}

/**
 * An interface representing OperationResult.
 */
export interface OperationResult {
  /**
   * The status of the request. Possible values include: 'Succeeded', 'Failed', 'canceled',
   * 'Accepted', 'Creating', 'Created', 'Updating', 'Updated', 'Deleting', 'Deleted', 'OK'
   */
  status?: Status;
}

/**
 * Additional parameters for getMultiplePages operation.
 */
export interface PagingGetMultiplePagesOptions {
  /**
   * Sets the maximum number of items to return in the response.
   */
  maxresults?: number;
  /**
   * Sets the maximum time that the server can spend processing the request, in seconds. The
   * default is 30 seconds. Default value: 30.
   */
  timeout?: number;
}

/**
 * Additional parameters for getOdataMultiplePages operation.
 */
export interface PagingGetOdataMultiplePagesOptions {
  /**
   * Sets the maximum number of items to return in the response.
   */
  maxresults?: number;
  /**
   * Sets the maximum time that the server can spend processing the request, in seconds. The
   * default is 30 seconds. Default value: 30.
   */
  timeout?: number;
}

/**
 * Additional parameters for getMultiplePagesWithOffset operation.
 */
export interface PagingGetMultiplePagesWithOffsetOptions {
  /**
   * Sets the maximum number of items to return in the response.
   */
  maxresults?: number;
  /**
   * Offset of return value
   */
  offset: number;
  /**
   * Sets the maximum time that the server can spend processing the request, in seconds. The
   * default is 30 seconds. Default value: 30.
   */
  timeout?: number;
}

/**
 * Additional parameters for a set of operations, such as:
 * Paging_getMultiplePagesFragmentWithGroupingNextLink, Paging_nextFragmentWithGrouping.
 */
export interface CustomParameterGroup {
  /**
   * Sets the api version to use.
   */
  apiVersion: string;
  /**
   * Sets the tenant to use.
   */
  tenant: string;
}

/**
 * Additional parameters for getMultiplePagesLRO operation.
 */
export interface PagingGetMultiplePagesLROOptions {
  /**
   * Sets the maximum number of items to return in the response.
   */
  maxresults?: number;
  /**
   * Sets the maximum time that the server can spend processing the request, in seconds. The
   * default is 30 seconds. Default value: 30.
   */
  timeout?: number;
}

/**
 * Additional parameters for getMultiplePagesWithOffsetNext operation.
 */
export interface PagingGetMultiplePagesWithOffsetNextOptions {
  /**
   * Sets the maximum number of items to return in the response.
   */
  maxresults?: number;
  /**
   * Sets the maximum time that the server can spend processing the request, in seconds. The
   * default is 30 seconds. Default value: 30.
   */
  timeout?: number;
}

/**
 * Optional Parameters.
 */
export interface PagingGetMultiplePagesOptionalParams extends msRest.RequestOptionsBase {
  clientRequestId?: string;
  /**
   * Additional parameters for the operation
   */
  pagingGetMultiplePagesOptions?: PagingGetMultiplePagesOptions;
}

/**
 * Optional Parameters.
 */
export interface PagingGetOdataMultiplePagesOptionalParams extends msRest.RequestOptionsBase {
  clientRequestId?: string;
  /**
   * Additional parameters for the operation
   */
  pagingGetOdataMultiplePagesOptions?: PagingGetOdataMultiplePagesOptions;
}

/**
 * Optional Parameters.
 */
export interface PagingGetMultiplePagesWithOffsetOptionalParams extends msRest.RequestOptionsBase {
  clientRequestId?: string;
}

/**
 * Optional Parameters.
 */
export interface PagingGetMultiplePagesLROOptionalParams extends msRest.RequestOptionsBase {
  clientRequestId?: string;
  /**
   * Additional parameters for the operation
   */
  pagingGetMultiplePagesLROOptions?: PagingGetMultiplePagesLROOptions;
}

/**
 * Optional Parameters.
 */
export interface PagingBeginGetMultiplePagesLROOptionalParams extends msRest.RequestOptionsBase {
  clientRequestId?: string;
  /**
   * Additional parameters for the operation
   */
  pagingGetMultiplePagesLROOptions?: PagingGetMultiplePagesLROOptions;
}

/**
 * Optional Parameters.
 */
export interface PagingGetMultiplePagesNextOptionalParams extends msRest.RequestOptionsBase {
  clientRequestId?: string;
  /**
   * Additional parameters for the operation
   */
  pagingGetMultiplePagesOptions?: PagingGetMultiplePagesOptions;
}

/**
 * Optional Parameters.
 */
export interface PagingGetOdataMultiplePagesNextOptionalParams extends msRest.RequestOptionsBase {
  clientRequestId?: string;
  /**
   * Additional parameters for the operation
   */
  pagingGetOdataMultiplePagesOptions?: PagingGetOdataMultiplePagesOptions;
}

/**
 * Optional Parameters.
 */
export interface PagingGetMultiplePagesWithOffsetNextOptionalParams extends msRest.RequestOptionsBase {
  clientRequestId?: string;
  /**
   * Additional parameters for the operation
   */
  pagingGetMultiplePagesWithOffsetNextOptions?: PagingGetMultiplePagesWithOffsetNextOptions;
}

/**
 * Optional Parameters.
 */
export interface PagingGetMultiplePagesLRONextOptionalParams extends msRest.RequestOptionsBase {
  clientRequestId?: string;
  /**
   * Additional parameters for the operation
   */
  pagingGetMultiplePagesLROOptions?: PagingGetMultiplePagesLROOptions;
}

/**
 * Optional Parameters.
 */
export interface PagingBeginGetMultiplePagesLRONextOptionalParams extends msRest.RequestOptionsBase {
  clientRequestId?: string;
  /**
   * Additional parameters for the operation
   */
  pagingGetMultiplePagesLROOptions?: PagingGetMultiplePagesLROOptions;
}

/**
 * An interface representing AutoRestPagingTestServiceOptions.
 */
export interface AutoRestPagingTestServiceOptions extends AzureServiceClientOptions {
  baseUri?: string;
}

/**
 * @interface
 * An interface representing the ProductResult.
 * @extends Array<Product>
 */
export interface ProductResult extends Array<Product> {
  nextLink?: string;
}

/**
 * @interface
 * An interface representing the OdataProductResult.
 * @extends Array<Product>
 */
export interface OdataProductResult extends Array<Product> {
  odatanextLink?: string;
}

/**
 * Defines values for Status.
 * Possible values include: 'Succeeded', 'Failed', 'canceled', 'Accepted', 'Creating', 'Created',
 * 'Updating', 'Updated', 'Deleting', 'Deleted', 'OK'
 * @readonly
 * @enum {string}
 */
export type Status = 'Succeeded' | 'Failed' | 'canceled' | 'Accepted' | 'Creating' | 'Created' | 'Updating' | 'Updated' | 'Deleting' | 'Deleted' | 'OK';

/**
 * Contains response data for the getSinglePages operation.
 */
export type PagingGetSinglePagesResponse = ProductResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ProductResult;
    };
};

/**
 * Contains response data for the getMultiplePages operation.
 */
export type PagingGetMultiplePagesResponse = ProductResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ProductResult;
    };
};

/**
 * Contains response data for the getOdataMultiplePages operation.
 */
export type PagingGetOdataMultiplePagesResponse = OdataProductResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: OdataProductResult;
    };
};

/**
 * Contains response data for the getMultiplePagesWithOffset operation.
 */
export type PagingGetMultiplePagesWithOffsetResponse = ProductResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ProductResult;
    };
};

/**
 * Contains response data for the getMultiplePagesRetryFirst operation.
 */
export type PagingGetMultiplePagesRetryFirstResponse = ProductResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ProductResult;
    };
};

/**
 * Contains response data for the getMultiplePagesRetrySecond operation.
 */
export type PagingGetMultiplePagesRetrySecondResponse = ProductResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ProductResult;
    };
};

/**
 * Contains response data for the getSinglePagesFailure operation.
 */
export type PagingGetSinglePagesFailureResponse = ProductResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ProductResult;
    };
};

/**
 * Contains response data for the getMultiplePagesFailure operation.
 */
export type PagingGetMultiplePagesFailureResponse = ProductResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ProductResult;
    };
};

/**
 * Contains response data for the getMultiplePagesFailureUri operation.
 */
export type PagingGetMultiplePagesFailureUriResponse = ProductResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ProductResult;
    };
};

/**
 * Contains response data for the getMultiplePagesFragmentNextLink operation.
 */
export type PagingGetMultiplePagesFragmentNextLinkResponse = OdataProductResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: OdataProductResult;
    };
};

/**
 * Contains response data for the getMultiplePagesFragmentWithGroupingNextLink operation.
 */
export type PagingGetMultiplePagesFragmentWithGroupingNextLinkResponse = OdataProductResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: OdataProductResult;
    };
};

/**
 * Contains response data for the getMultiplePagesLRO operation.
 */
export type PagingGetMultiplePagesLROResponse = ProductResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ProductResult;
    };
};

/**
 * Contains response data for the nextFragment operation.
 */
export type PagingNextFragmentResponse = OdataProductResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: OdataProductResult;
    };
};

/**
 * Contains response data for the nextFragmentWithGrouping operation.
 */
export type PagingNextFragmentWithGroupingResponse = OdataProductResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: OdataProductResult;
    };
};

/**
 * Contains response data for the beginGetMultiplePagesLRO operation.
 */
export type PagingBeginGetMultiplePagesLROResponse = ProductResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ProductResult;
    };
};

/**
 * Contains response data for the getSinglePagesNext operation.
 */
export type PagingGetSinglePagesNextResponse = ProductResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ProductResult;
    };
};

/**
 * Contains response data for the getMultiplePagesNext operation.
 */
export type PagingGetMultiplePagesNextResponse = ProductResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ProductResult;
    };
};

/**
 * Contains response data for the getOdataMultiplePagesNext operation.
 */
export type PagingGetOdataMultiplePagesNextResponse = OdataProductResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: OdataProductResult;
    };
};

/**
 * Contains response data for the getMultiplePagesWithOffsetNext operation.
 */
export type PagingGetMultiplePagesWithOffsetNextResponse = ProductResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ProductResult;
    };
};

/**
 * Contains response data for the getMultiplePagesRetryFirstNext operation.
 */
export type PagingGetMultiplePagesRetryFirstNextResponse = ProductResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ProductResult;
    };
};

/**
 * Contains response data for the getMultiplePagesRetrySecondNext operation.
 */
export type PagingGetMultiplePagesRetrySecondNextResponse = ProductResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ProductResult;
    };
};

/**
 * Contains response data for the getSinglePagesFailureNext operation.
 */
export type PagingGetSinglePagesFailureNextResponse = ProductResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ProductResult;
    };
};

/**
 * Contains response data for the getMultiplePagesFailureNext operation.
 */
export type PagingGetMultiplePagesFailureNextResponse = ProductResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ProductResult;
    };
};

/**
 * Contains response data for the getMultiplePagesFailureUriNext operation.
 */
export type PagingGetMultiplePagesFailureUriNextResponse = ProductResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ProductResult;
    };
};

/**
 * Contains response data for the getMultiplePagesLRONext operation.
 */
export type PagingGetMultiplePagesLRONextResponse = ProductResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ProductResult;
    };
};

/**
 * Contains response data for the beginGetMultiplePagesLRONext operation.
 */
export type PagingBeginGetMultiplePagesLRONextResponse = ProductResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ProductResult;
    };
};
