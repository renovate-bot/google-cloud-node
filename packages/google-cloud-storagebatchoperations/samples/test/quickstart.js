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

'use strict';

const assert = require('assert');
const path = require('path');
const cp = require('child_process');
const {describe, it, before} = require('mocha');
const {StorageBatchOperationsClient} =
  require('@google-cloud/storagebatchoperations').v1;
const storagebatchoperationsClient = new StorageBatchOperationsClient();

const execSync = cmd => cp.execSync(cmd, {encoding: 'utf-8'});

const cwd = path.join(__dirname, '..');

describe('Quickstart', () => {
  let projectId;

  before(async () => {
    projectId = await storagebatchoperationsClient.getProjectId();
  });

  it('should run quickstart', async () => {
    const output = execSync(
      `node ./quickstart.js projects/${projectId}/locations/global`,
      {cwd}
    );
    assert(output !== null);
  });
});
