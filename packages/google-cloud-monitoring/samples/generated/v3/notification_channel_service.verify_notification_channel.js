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

function main(name, code) {
  // [START monitoring_v3_generated_NotificationChannelService_VerifyNotificationChannel_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The notification channel to verify.
   */
  // const name = 'abc123'
  /**
   *  Required. The verification code that was delivered to the channel as
   *  a result of invoking the `SendNotificationChannelVerificationCode` API
   *  method or that was retrieved from a verified channel via
   *  `GetNotificationChannelVerificationCode`. For example, one might have
   *  "G-123456" or "TKNZGhhd2EyN3I1MnRnMjRv" (in general, one is only
   *  guaranteed that the code is valid UTF-8; one should not
   *  make any assumptions regarding the structure or format of the code).
   */
  // const code = 'abc123'

  // Imports the Monitoring library
  const {NotificationChannelServiceClient} = require('@google-cloud/monitoring').v3;

  // Instantiates a client
  const monitoringClient = new NotificationChannelServiceClient();

  async function callVerifyNotificationChannel() {
    // Construct request
    const request = {
      name,
      code,
    };

    // Run request
    const response = await monitoringClient.verifyNotificationChannel(request);
    console.log(response);
  }

  callVerifyNotificationChannel();
  // [END monitoring_v3_generated_NotificationChannelService_VerifyNotificationChannel_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
