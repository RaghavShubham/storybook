import { readdirSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { describe, expect, it } from 'vitest';

import type { IndexEntry } from 'storybook/internal/types';
import type { DocgenPayload } from 'storybook/open-service';

import { buildStoryDocsPayload } from '../../../../../renderers/vue3/src/story-docs/build-story-docs.ts';

const FIXTURES_DIR = join(dirname(fileURLToPath(import.meta.url)), '__testfixtures__');
const STORIES_FILE = 'input.stories.ts';

function fixtureCases(): string[] {
  return readdirSync(FIXTURES_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();
}

function makeStoryIndexEntry(importPath: string, title: string): IndexEntry {
  const componentId = title.split('/').at(-1)!.replace(/\s+/g, '').toLowerCase();
  return {
    id: `${componentId}--primary`,
    name: 'Primary',
    title,
    type: 'story',
    subtype: 'story',
    importPath,
  };
}

function docgenForFixture(
  fixtureCase: string,
  id: string,
  path: string
): DocgenPayload | undefined {
  if (fixtureCase === 'docgen-unavailable' || fixtureCase === 'no-component') {
    return undefined;
  }

  const details: Record<string, { events?: string[]; slots?: string[] }> = {
    'function-slot': { slots: ['default'] },
    slots: { slots: ['default', 'header'] },
    'v-model': { events: ['update:modelValue', 'update:checked'] },
  };

  return {
    id,
    name: componentNameFromFixture(fixtureCase),
    path,
    jsDocTags: {},
    vueComponentMeta: {
      events: (details[fixtureCase]?.events ?? []).map((name) => ({ name })),
      slots: (details[fixtureCase]?.slots ?? []).map((name) => ({ name })),
    },
  };
}

function componentNameFromFixture(fixtureCase: string): string {
  return fixtureCase
    .split('-')
    .map((segment) => `${segment.charAt(0).toUpperCase()}${segment.slice(1)}`)
    .join('');
}

describe('vue3 story-docs payload baselines', () => {
  it.each(fixtureCases())('%s', async (fixtureCase): Promise<void> => {
    const testDir = resolve(FIXTURES_DIR, fixtureCase);
    const importPath = resolve(testDir, STORIES_FILE);
    const entry = makeStoryIndexEntry(importPath, `Forms/${fixtureCase}`);
    const payload = await buildStoryDocsPayload(
      {
        entry,
      },
      {
        readDocgen: async (id) => docgenForFixture(fixtureCase, id, importPath),
      }
    );

    await expect(payload ? { ...payload, path: '__PATH__' } : payload).toMatchFileSnapshot(
      join(testDir, 'payload.snapshot')
    );
  });
});
