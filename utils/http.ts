/**
 * Handle http request
 */

import useSWR from 'swr'

const apiHost = '/api'

export const fetcher = (url: string) => fetch(apiHost + url).then(r => r.json())

export async function creator(url: string, { arg }) {
  const res = await fetch(apiHost + url, {
    method: 'POST',
    body: JSON.stringify(arg),
  })
  return res.json()
}

export async function updater(url: string, { arg }) {
  const res = await fetch(apiHost + url, {
    method: 'PATCH',
    body: JSON.stringify(arg),
  })
  return res.json()
}

export type TResponse = {
  data?: any,
  error?: any,
}

export enum StatusCode {
  Ok = 200,
  Created = 201,

  Bad_Request = 400,
  Unauthorized = 401,
  Forbidden = 403,
  Not_Found = 404,
  Method_Not_Allowed = 405,

  Server_Error = 500,
}

export function error(msg: string): TResponse {
  return { error: msg }
}

export function ok(data: any): TResponse {
  return { data }
}

export function useApi(path: string): TResponse {
  const { data, error } = useSWR(path, fetcher)

  if (error) { // Error occurs in fetcher.
    return {}
  }

  return { data: data?.data, error: data?.error }
}