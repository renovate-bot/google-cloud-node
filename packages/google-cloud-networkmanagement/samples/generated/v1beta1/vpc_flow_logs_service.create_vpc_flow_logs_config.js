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

function main(parent, vpcFlowLogsConfigId, vpcFlowLogsConfig) {
  // [START networkmanagement_v1beta1_generated_VpcFlowLogsService_CreateVpcFlowLogsConfig_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The parent resource of the VpcFlowLogsConfig to create,
   *  in one of the following formats:
   *  - For project-level resources: `projects/{project_id}/locations/global`
   *  - For organization-level resources:
   *  `organizations/{organization_id}/locations/global`
   */
  // const parent = 'abc123'
  /**
   *  Required. ID of the `VpcFlowLogsConfig`.
   */
  // const vpcFlowLogsConfigId = 'abc123'
  /**
   *  Required. A `VpcFlowLogsConfig` resource
   */
  // const vpcFlowLogsConfig = {}

  // Imports the Networkmanagement library
  const {VpcFlowLogsServiceClient} = require('@google-cloud/network-management').v1beta1;

  // Instantiates a client
  const networkmanagementClient = new VpcFlowLogsServiceClient();

  async function callCreateVpcFlowLogsConfig() {
    // Construct request
    const request = {
      parent,
      vpcFlowLogsConfigId,
      vpcFlowLogsConfig,
    };

    // Run request
    const [operation] = await networkmanagementClient.createVpcFlowLogsConfig(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callCreateVpcFlowLogsConfig();
  // [END networkmanagement_v1beta1_generated_VpcFlowLogsService_CreateVpcFlowLogsConfig_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
