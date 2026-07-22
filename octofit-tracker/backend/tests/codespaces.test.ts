import test from 'node:test';
import assert from 'node:assert/strict';
import { getApiBaseUrl } from '../src/utils/codespaces.ts';

test('uses localhost when no Codespaces name is set', () => {
  delete process.env.CODESPACE_NAME;
  assert.equal(getApiBaseUrl(), 'http://localhost:8000');
});

test('uses Codespaces URL when CODESPACE_NAME is set', () => {
  process.env.CODESPACE_NAME = 'octofit-demo';
  assert.equal(getApiBaseUrl(), 'https://octofit-demo-8000.app.github.dev');
});
