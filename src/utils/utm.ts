/**
 * UTM parameter utilities for campaign attribution.
 * Extracts UTM params from URL, persists in sessionStorage,
 * and attaches them to form submissions.
 */

export interface UTMParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
}

const UTM_STORAGE_KEY = 'hs_utm_params';

const UTM_KEYS: (keyof UTMParams)[] = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
];

/** Extract UTM params from the current URL */
export function extractUTMFromURL(): UTMParams {
  const params = new URLSearchParams(window.location.search);
  const utm: UTMParams = {};

  UTM_KEYS.forEach((key) => {
    const value = params.get(key);
    if (value) utm[key] = value;
  });

  return utm;
}

/** Save UTM params to sessionStorage */
export function persistUTM(utm: UTMParams): void {
  if (Object.keys(utm).length > 0) {
    try {
      sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(utm));
    } catch {
      // sessionStorage not available
    }
  }
}

/** Retrieve persisted UTM params */
export function getPersistedUTM(): UTMParams {
  try {
    const stored = sessionStorage.getItem(UTM_STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
}

/** Extract and persist UTM params — call on page load */
export function captureUTM(): UTMParams {
  const utm = extractUTMFromURL();
  if (Object.keys(utm).length > 0) {
    persistUTM(utm);
    return utm;
  }
  return getPersistedUTM();
}
