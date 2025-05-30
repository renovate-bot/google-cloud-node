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

function main(query) {
  // [START chat_v1_generated_ChatService_SearchSpaces_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  When `true`, the method runs using the user's Google Workspace
   *  administrator privileges.
   *  The calling user must be a Google Workspace administrator with the
   *  manage chat and spaces conversations
   *  privilege (https://support.google.com/a/answer/13369245).
   *  Requires either the `chat.admin.spaces.readonly` or `chat.admin.spaces`
   *  OAuth 2.0
   *  scope (https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes).
   *  This method currently only supports admin access, thus only `true` is
   *  accepted for this field.
   */
  // const useAdminAccess = true
  /**
   *  The maximum number of spaces to return. The service may return fewer than
   *  this value.
   *  If unspecified, at most 100 spaces are returned.
   *  The maximum value is 1000. If you use a value more than 1000, it's
   *  automatically changed to 1000.
   */
  // const pageSize = 1234
  /**
   *  A token, received from the previous search spaces call. Provide this
   *  parameter to retrieve the subsequent page.
   *  When paginating, all other parameters provided should match the call that
   *  provided the page token. Passing different values to the other parameters
   *  might lead to unexpected results.
   */
  // const pageToken = 'abc123'
  /**
   *  Required. A search query.
   *  You can search by using the following parameters:
   *  - `create_time`
   *  - `customer`
   *  - `display_name`
   *  - `external_user_allowed`
   *  - `last_active_time`
   *  - `space_history_state`
   *  - `space_type`
   *  `create_time` and `last_active_time` accept a timestamp in
   *  RFC-3339 (https://www.rfc-editor.org/rfc/rfc3339) format and the supported
   *  comparison operators are: `=`, `<`, `>`, `<=`, `>=`.
   *  `customer` is required and is used to indicate which customer
   *  to fetch spaces from. `customers/my_customer` is the only supported value.
   *  `display_name` only accepts the `HAS` (`:`) operator. The text to
   *  match is first tokenized into tokens and each token is prefix-matched
   *  case-insensitively and independently as a substring anywhere in the space's
   *  `display_name`. For example, `Fun Eve` matches `Fun event` or `The
   *  evening was fun`, but not `notFun event` or `even`.
   *  `external_user_allowed` accepts either `true` or `false`.
   *  `space_history_state` only accepts values from the `historyState` 
   *  (https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces#Space.HistoryState)
   *  field of a `space` resource.
   *  `space_type` is required and the only valid value is `SPACE`.
   *  Across different fields, only `AND` operators are supported. A valid
   *  example is `space_type = "SPACE" AND display_name:"Hello"` and an invalid
   *  example is `space_type = "SPACE" OR display_name:"Hello"`.
   *  Among the same field,
   *  `space_type` doesn't support `AND` or `OR` operators.
   *  `display_name`, 'space_history_state', and 'external_user_allowed' only
   *  support `OR` operators.
   *  `last_active_time` and `create_time` support both `AND` and `OR` operators.
   *  `AND` can only be used to represent an interval, such as `last_active_time
   *  < "2022-01-01T00:00:00+00:00" AND last_active_time >
   *  "2023-01-01T00:00:00+00:00"`.
   *  The following example queries are valid:
   *  ```
   *  customer = "customers/my_customer" AND space_type = "SPACE"
   *  customer = "customers/my_customer" AND space_type = "SPACE" AND
   *  display_name:"Hello World"
   *  customer = "customers/my_customer" AND space_type = "SPACE" AND
   *  (last_active_time < "2020-01-01T00:00:00+00:00" OR last_active_time >
   *  "2022-01-01T00:00:00+00:00")
   *  customer = "customers/my_customer" AND space_type = "SPACE" AND
   *  (display_name:"Hello World" OR display_name:"Fun event") AND
   *  (last_active_time > "2020-01-01T00:00:00+00:00" AND last_active_time <
   *  "2022-01-01T00:00:00+00:00")
   *  customer = "customers/my_customer" AND space_type = "SPACE" AND
   *  (create_time > "2019-01-01T00:00:00+00:00" AND create_time <
   *  "2020-01-01T00:00:00+00:00") AND (external_user_allowed = "true") AND
   *  (space_history_state = "HISTORY_ON" OR space_history_state = "HISTORY_OFF")
   *  ```
   */
  // const query = 'abc123'
  /**
   *  Optional. How the list of spaces is ordered.
   *  Supported attributes to order by are:
   *  - `membership_count.joined_direct_human_user_count` — Denotes the count of
   *  human users that have directly joined a space.
   *  - `last_active_time` — Denotes the time when last eligible item is added to
   *  any topic of this space.
   *  - `create_time` — Denotes the time of the space creation.
   *  Valid ordering operation values are:
   *  - `ASC` for ascending. Default value.
   *  - `DESC` for descending.
   *  The supported syntax are:
   *  - `membership_count.joined_direct_human_user_count DESC`
   *  - `membership_count.joined_direct_human_user_count ASC`
   *  - `last_active_time DESC`
   *  - `last_active_time ASC`
   *  - `create_time DESC`
   *  - `create_time ASC`
   */
  // const orderBy = 'abc123'

  // Imports the Chat library
  const {ChatServiceClient} = require('@google-apps/chat').v1;

  // Instantiates a client
  const chatClient = new ChatServiceClient();

  async function callSearchSpaces() {
    // Construct request
    const request = {
      query,
    };

    // Run request
    const iterable = chatClient.searchSpacesAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callSearchSpaces();
  // [END chat_v1_generated_ChatService_SearchSpaces_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
