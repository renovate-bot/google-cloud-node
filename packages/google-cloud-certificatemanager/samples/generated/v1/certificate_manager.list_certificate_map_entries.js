// Copyright 2025 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **



'use strict';

function main(parent) {
  // [START certificatemanager_v1_generated_CertificateManager_ListCertificateMapEntries_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The project, location and certificate map from which the
   *  certificate map entries should be listed, specified in the format
   *  `projects/* /locations/* /certificateMaps/*`.
   */
  // const parent = 'abc123'
  /**
   *  Maximum number of certificate map entries to return. The service may return
   *  fewer than this value.
   *  If unspecified, at most 50 certificate map entries will be returned.
   *  The maximum value is 1000; values above 1000 will be coerced to 1000.
   */
  // const pageSize = 1234
  /**
   *  The value returned by the last `ListCertificateMapEntriesResponse`.
   *  Indicates that this is a continuation of a prior
   *  `ListCertificateMapEntries` call, and that the system should return the
   *  next page of data.
   */
  // const pageToken = 'abc123'
  /**
   *  Filter expression to restrict the returned Certificate Map Entries.
   */
  // const filter = 'abc123'
  /**
   *  A list of Certificate Map Entry field names used to specify
   *  the order of the returned results. The default sorting order is ascending.
   *  To specify descending order for a field, add a suffix `" desc"`.
   */
  // const orderBy = 'abc123'

  // Imports the Certificatemanager library
  const {CertificateManagerClient} = require('@google-cloud/certificate-manager').v1;

  // Instantiates a client
  const certificatemanagerClient = new CertificateManagerClient();

  async function callListCertificateMapEntries() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = certificatemanagerClient.listCertificateMapEntriesAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListCertificateMapEntries();
  // [END certificatemanager_v1_generated_CertificateManager_ListCertificateMapEntries_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
