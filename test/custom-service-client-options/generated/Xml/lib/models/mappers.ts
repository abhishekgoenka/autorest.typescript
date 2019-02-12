/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as msRest from "@azure/ms-rest-js";


export const ErrorModel: msRest.CompositeMapper = {
  serializedName: "Error",
  type: {
    name: "Composite",
    className: "ErrorModel",
    modelProperties: {
      status: {
        serializedName: "status",
        type: {
          name: "Number"
        }
      },
      message: {
        serializedName: "message",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Slide: msRest.CompositeMapper = {
  serializedName: "Slide",
  type: {
    name: "Composite",
    className: "Slide",
    modelProperties: {
      type: {
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      title: {
        serializedName: "title",
        type: {
          name: "String"
        }
      },
      items: {
        serializedName: "items",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const Slideshow: msRest.CompositeMapper = {
  serializedName: "Slideshow",
  type: {
    name: "Composite",
    className: "Slideshow",
    modelProperties: {
      title: {
        serializedName: "title",
        type: {
          name: "String"
        }
      },
      date: {
        serializedName: "date",
        type: {
          name: "String"
        }
      },
      author: {
        serializedName: "author",
        type: {
          name: "String"
        }
      },
      slides: {
        serializedName: "slides",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Slide"
            }
          }
        }
      }
    }
  }
};

export const AppleBarrel: msRest.CompositeMapper = {
  serializedName: "AppleBarrel",
  type: {
    name: "Composite",
    className: "AppleBarrel",
    modelProperties: {
      goodApples: {
        serializedName: "GoodApples",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      badApples: {
        serializedName: "BadApples",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const Banana: msRest.CompositeMapper = {
  serializedName: "Banana",
  type: {
    name: "Composite",
    className: "Banana",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      flavor: {
        serializedName: "flavor",
        type: {
          name: "String"
        }
      },
      expiration: {
        serializedName: "expiration",
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const ContainerProperties: msRest.CompositeMapper = {
  serializedName: "ContainerProperties",
  type: {
    name: "Composite",
    className: "ContainerProperties",
    modelProperties: {
      lastModified: {
        required: true,
        serializedName: "Last-Modified",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      etag: {
        required: true,
        serializedName: "Etag",
        type: {
          name: "String"
        }
      },
      leaseStatus: {
        serializedName: "LeaseStatus",
        type: {
          name: "Enum",
          allowedValues: [
            "locked",
            "unlocked"
          ]
        }
      },
      leaseState: {
        serializedName: "LeaseState",
        type: {
          name: "Enum",
          allowedValues: [
            "available",
            "leased",
            "expired",
            "breaking",
            "broken"
          ]
        }
      },
      leaseDuration: {
        serializedName: "LeaseDuration",
        type: {
          name: "Enum",
          allowedValues: [
            "infinite",
            "fixed"
          ]
        }
      },
      publicAccess: {
        serializedName: "PublicAccess",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Container: msRest.CompositeMapper = {
  serializedName: "Container",
  type: {
    name: "Composite",
    className: "Container",
    modelProperties: {
      name: {
        required: true,
        serializedName: "Name",
        type: {
          name: "String"
        }
      },
      properties: {
        required: true,
        serializedName: "Properties",
        type: {
          name: "Composite",
          className: "ContainerProperties"
        }
      },
      metadata: {
        serializedName: "Metadata",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const ListContainersResponse: msRest.CompositeMapper = {
  serializedName: "ListContainersResponse",
  type: {
    name: "Composite",
    className: "ListContainersResponse",
    modelProperties: {
      serviceEndpoint: {
        required: true,
        serializedName: "ServiceEndpoint",
        type: {
          name: "String"
        }
      },
      prefix: {
        required: true,
        serializedName: "Prefix",
        type: {
          name: "String"
        }
      },
      marker: {
        serializedName: "Marker",
        type: {
          name: "String"
        }
      },
      maxResults: {
        required: true,
        serializedName: "MaxResults",
        type: {
          name: "Number"
        }
      },
      containers: {
        serializedName: "Containers",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Container"
            }
          }
        }
      },
      nextMarker: {
        required: true,
        serializedName: "NextMarker",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CorsRule: msRest.CompositeMapper = {
  serializedName: "CorsRule",
  type: {
    name: "Composite",
    className: "CorsRule",
    modelProperties: {
      allowedOrigins: {
        required: true,
        serializedName: "AllowedOrigins",
        type: {
          name: "String"
        }
      },
      allowedMethods: {
        required: true,
        serializedName: "AllowedMethods",
        type: {
          name: "String"
        }
      },
      allowedHeaders: {
        required: true,
        serializedName: "AllowedHeaders",
        type: {
          name: "String"
        }
      },
      exposedHeaders: {
        required: true,
        serializedName: "ExposedHeaders",
        type: {
          name: "String"
        }
      },
      maxAgeInSeconds: {
        required: true,
        serializedName: "MaxAgeInSeconds",
        constraints: {
          InclusiveMinimum: 0
        },
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const BlobProperties: msRest.CompositeMapper = {
  serializedName: "BlobProperties",
  type: {
    name: "Composite",
    className: "BlobProperties",
    modelProperties: {
      lastModified: {
        required: true,
        serializedName: "Last-Modified",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      etag: {
        required: true,
        serializedName: "Etag",
        type: {
          name: "String"
        }
      },
      contentLength: {
        serializedName: "Content-Length",
        type: {
          name: "Number"
        }
      },
      contentType: {
        serializedName: "Content-Type",
        type: {
          name: "String"
        }
      },
      contentEncoding: {
        serializedName: "Content-Encoding",
        type: {
          name: "String"
        }
      },
      contentLanguage: {
        serializedName: "Content-Language",
        type: {
          name: "String"
        }
      },
      contentMD5: {
        serializedName: "Content-MD5",
        type: {
          name: "String"
        }
      },
      contentDisposition: {
        serializedName: "Content-Disposition",
        type: {
          name: "String"
        }
      },
      cacheControl: {
        serializedName: "Cache-Control",
        type: {
          name: "String"
        }
      },
      blobSequenceNumber: {
        serializedName: "x-ms-blob-sequence-number",
        type: {
          name: "Number"
        }
      },
      blobType: {
        serializedName: "BlobType",
        type: {
          name: "Enum",
          allowedValues: [
            "BlockBlob",
            "PageBlob",
            "AppendBlob"
          ]
        }
      },
      leaseStatus: {
        serializedName: "LeaseStatus",
        type: {
          name: "Enum",
          allowedValues: [
            "locked",
            "unlocked"
          ]
        }
      },
      leaseState: {
        serializedName: "LeaseState",
        type: {
          name: "Enum",
          allowedValues: [
            "available",
            "leased",
            "expired",
            "breaking",
            "broken"
          ]
        }
      },
      leaseDuration: {
        serializedName: "LeaseDuration",
        type: {
          name: "Enum",
          allowedValues: [
            "infinite",
            "fixed"
          ]
        }
      },
      copyId: {
        serializedName: "CopyId",
        type: {
          name: "String"
        }
      },
      copyStatus: {
        serializedName: "CopyStatus",
        type: {
          name: "Enum",
          allowedValues: [
            "pending",
            "success",
            "aborted",
            "failed"
          ]
        }
      },
      copySource: {
        serializedName: "CopySource",
        type: {
          name: "String"
        }
      },
      copyProgress: {
        serializedName: "CopyProgress",
        type: {
          name: "String"
        }
      },
      copyCompletionTime: {
        serializedName: "CopyCompletionTime",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      copyStatusDescription: {
        serializedName: "CopyStatusDescription",
        type: {
          name: "String"
        }
      },
      serverEncrypted: {
        serializedName: "ServerEncrypted",
        type: {
          name: "Boolean"
        }
      },
      incrementalCopy: {
        serializedName: "IncrementalCopy",
        type: {
          name: "Boolean"
        }
      },
      destinationSnapshot: {
        serializedName: "DestinationSnapshot",
        type: {
          name: "String"
        }
      },
      deletedTime: {
        serializedName: "DeletedTime",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      remainingRetentionDays: {
        serializedName: "RemainingRetentionDays",
        type: {
          name: "Number"
        }
      },
      accessTier: {
        serializedName: "AccessTier",
        type: {
          name: "String"
        }
      },
      accessTierInferred: {
        serializedName: "AccessTierInferred",
        type: {
          name: "Boolean"
        }
      },
      archiveStatus: {
        serializedName: "ArchiveStatus",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Blob: msRest.CompositeMapper = {
  serializedName: "Blob",
  type: {
    name: "Composite",
    className: "Blob",
    modelProperties: {
      name: {
        required: true,
        serializedName: "Name",
        type: {
          name: "String"
        }
      },
      deleted: {
        required: true,
        serializedName: "Deleted",
        type: {
          name: "Boolean"
        }
      },
      snapshot: {
        required: true,
        serializedName: "Snapshot",
        type: {
          name: "String"
        }
      },
      properties: {
        required: true,
        serializedName: "Properties",
        type: {
          name: "Composite",
          className: "BlobProperties"
        }
      },
      metadata: {
        serializedName: "Metadata",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const RetentionPolicy: msRest.CompositeMapper = {
  serializedName: "RetentionPolicy",
  type: {
    name: "Composite",
    className: "RetentionPolicy",
    modelProperties: {
      enabled: {
        required: true,
        serializedName: "Enabled",
        type: {
          name: "Boolean"
        }
      },
      days: {
        serializedName: "Days",
        constraints: {
          InclusiveMinimum: 1
        },
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const Logging: msRest.CompositeMapper = {
  serializedName: "Logging",
  type: {
    name: "Composite",
    className: "Logging",
    modelProperties: {
      version: {
        required: true,
        serializedName: "Version",
        type: {
          name: "String"
        }
      },
      deleteProperty: {
        required: true,
        serializedName: "Delete",
        type: {
          name: "Boolean"
        }
      },
      read: {
        required: true,
        serializedName: "Read",
        type: {
          name: "Boolean"
        }
      },
      write: {
        required: true,
        serializedName: "Write",
        type: {
          name: "Boolean"
        }
      },
      retentionPolicy: {
        required: true,
        serializedName: "RetentionPolicy",
        type: {
          name: "Composite",
          className: "RetentionPolicy"
        }
      }
    }
  }
};

export const Metrics: msRest.CompositeMapper = {
  serializedName: "Metrics",
  type: {
    name: "Composite",
    className: "Metrics",
    modelProperties: {
      version: {
        serializedName: "Version",
        type: {
          name: "String"
        }
      },
      enabled: {
        required: true,
        serializedName: "Enabled",
        type: {
          name: "Boolean"
        }
      },
      includeAPIs: {
        serializedName: "IncludeAPIs",
        type: {
          name: "Boolean"
        }
      },
      retentionPolicy: {
        serializedName: "RetentionPolicy",
        type: {
          name: "Composite",
          className: "RetentionPolicy"
        }
      }
    }
  }
};

export const BlobPrefix: msRest.CompositeMapper = {
  serializedName: "BlobPrefix",
  type: {
    name: "Composite",
    className: "BlobPrefix",
    modelProperties: {
      name: {
        required: true,
        serializedName: "Name",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Blobs: msRest.CompositeMapper = {
  serializedName: "Blobs",
  type: {
    name: "Composite",
    className: "Blobs",
    modelProperties: {
      blobPrefix: {
        serializedName: "BlobPrefix",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "BlobPrefix"
            }
          }
        }
      },
      blob: {
        serializedName: "Blob",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Blob"
            }
          }
        }
      }
    }
  }
};

export const ListBlobsResponse: msRest.CompositeMapper = {
  serializedName: "ListBlobsResponse",
  type: {
    name: "Composite",
    className: "ListBlobsResponse",
    modelProperties: {
      serviceEndpoint: {
        required: true,
        serializedName: "ServiceEndpoint",
        type: {
          name: "String"
        }
      },
      containerName: {
        required: true,
        serializedName: "ContainerName",
        type: {
          name: "String"
        }
      },
      prefix: {
        required: true,
        serializedName: "Prefix",
        type: {
          name: "String"
        }
      },
      marker: {
        required: true,
        serializedName: "Marker",
        type: {
          name: "String"
        }
      },
      maxResults: {
        required: true,
        serializedName: "MaxResults",
        type: {
          name: "Number"
        }
      },
      delimiter: {
        required: true,
        serializedName: "Delimiter",
        type: {
          name: "String"
        }
      },
      blobs: {
        required: true,
        serializedName: "Blobs",
        type: {
          name: "Composite",
          className: "Blobs"
        }
      },
      nextMarker: {
        required: true,
        serializedName: "NextMarker",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AccessPolicy: msRest.CompositeMapper = {
  serializedName: "AccessPolicy",
  type: {
    name: "Composite",
    className: "AccessPolicy",
    modelProperties: {
      start: {
        required: true,
        serializedName: "Start",
        type: {
          name: "DateTime"
        }
      },
      expiry: {
        required: true,
        serializedName: "Expiry",
        type: {
          name: "DateTime"
        }
      },
      permission: {
        required: true,
        serializedName: "Permission",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SignedIdentifier: msRest.CompositeMapper = {
  serializedName: "SignedIdentifier",
  type: {
    name: "Composite",
    className: "SignedIdentifier",
    modelProperties: {
      id: {
        required: true,
        serializedName: "Id",
        type: {
          name: "String"
        }
      },
      accessPolicy: {
        required: true,
        serializedName: "AccessPolicy",
        type: {
          name: "Composite",
          className: "AccessPolicy"
        }
      }
    }
  }
};

export const StorageServiceProperties: msRest.CompositeMapper = {
  serializedName: "StorageServiceProperties",
  type: {
    name: "Composite",
    className: "StorageServiceProperties",
    modelProperties: {
      logging: {
        serializedName: "Logging",
        type: {
          name: "Composite",
          className: "Logging"
        }
      },
      hourMetrics: {
        serializedName: "HourMetrics",
        type: {
          name: "Composite",
          className: "Metrics"
        }
      },
      minuteMetrics: {
        serializedName: "MinuteMetrics",
        type: {
          name: "Composite",
          className: "Metrics"
        }
      },
      cors: {
        serializedName: "Cors",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "CorsRule"
            }
          }
        }
      },
      defaultServiceVersion: {
        serializedName: "DefaultServiceVersion",
        type: {
          name: "String"
        }
      },
      deleteRetentionPolicy: {
        serializedName: "DeleteRetentionPolicy",
        type: {
          name: "Composite",
          className: "RetentionPolicy"
        }
      }
    }
  }
};

export const ComplexTypeNoMeta: msRest.CompositeMapper = {
  serializedName: "ComplexTypeNoMeta",
  type: {
    name: "Composite",
    className: "ComplexTypeNoMeta",
    modelProperties: {
      id: {
        serializedName: "ID",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ComplexTypeWithMeta: msRest.CompositeMapper = {
  serializedName: "ComplexTypeWithMeta",
  type: {
    name: "Composite",
    className: "ComplexTypeWithMeta",
    modelProperties: {
      id: {
        serializedName: "ID",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RootWithRefAndNoMeta: msRest.CompositeMapper = {
  serializedName: "RootWithRefAndNoMeta",
  type: {
    name: "Composite",
    className: "RootWithRefAndNoMeta",
    modelProperties: {
      refToModel: {
        serializedName: "RefToModel",
        type: {
          name: "Composite",
          className: "ComplexTypeNoMeta"
        }
      },
      something: {
        serializedName: "Something",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RootWithRefAndMeta: msRest.CompositeMapper = {
  serializedName: "RootWithRefAndMeta",
  type: {
    name: "Composite",
    className: "RootWithRefAndMeta",
    modelProperties: {
      refToModel: {
        serializedName: "RefToModel",
        type: {
          name: "Composite",
          className: "ComplexTypeWithMeta"
        }
      },
      something: {
        serializedName: "Something",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const XmlGetHeadersHeaders: msRest.CompositeMapper = {
  serializedName: "xml-getheaders-headers",
  type: {
    name: "Composite",
    className: "XmlGetHeadersHeaders",
    modelProperties: {
      customHeader: {
        serializedName: "custom-header",
        type: {
          name: "String"
        }
      }
    }
  }
};
