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
  // [START monitoring_v3_generated_ServiceMonitoringService_ListServiceLevelObjectives_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Resource name of the parent containing the listed SLOs, either a
   *  project or a Monitoring Metrics Scope. The formats are:
   *      projects/[PROJECT_ID_OR_NUMBER]/services/[SERVICE_ID]
   *      workspaces/[HOST_PROJECT_ID_OR_NUMBER]/services/-
   */
  // const parent = 'abc123'
  /**
   *  A filter specifying what `ServiceLevelObjective`s to return.
   */
  // const filter = 'abc123'
  /**
   *  A non-negative number that is the maximum number of results to return.
   *  When 0, use default page size.
   */
  // const pageSize = 1234
  /**
   *  If this field is not empty then it must contain the `nextPageToken` value
   *  returned by a previous call to this method.  Using this field causes the
   *  method to return additional results from the previous method call.
   */
  // const pageToken = 'abc123'
  /**
   *  View of the `ServiceLevelObjective`s to return. If `DEFAULT`, return each
   *  `ServiceLevelObjective` as originally defined. If `EXPLICIT` and the
   *  `ServiceLevelObjective` is defined in terms of a `BasicSli`, replace the
   *  `BasicSli` with a `RequestBasedSli` spelling out how the SLI is computed.
   */
  // const view = {}

  // Imports the Monitoring library
  const {ServiceMonitoringServiceClient} = require('@google-cloud/monitoring').v3;

  // Instantiates a client
  const monitoringClient = new ServiceMonitoringServiceClient();

  async function callListServiceLevelObjectives() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = monitoringClient.listServiceLevelObjectivesAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListServiceLevelObjectives();
  // [END monitoring_v3_generated_ServiceMonitoringService_ListServiceLevelObjectives_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
