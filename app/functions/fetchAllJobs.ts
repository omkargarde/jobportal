'use server'
import type { IFetchErrors } from '~/types/fetchError.type'
import type { IJobs } from '~/types/jobs.type'
import process from 'node:process'

interface JSONResponse {
  data?: IJobs[]
  errors?: IFetchErrors[]
}

export async function FetchAllJobs() {
  if (process.env.RAPIDAPI_KEY === undefined || process.env.RAPIDAPI_HOST === undefined) {
    console.error('Environment variable undefined')
    return new Error('Environment variable undefined')
  }
  const url = 'https://jsearch.p.rapidapi.com/search?query=developer%20jobs%20in%20chicago&page=1&num_pages=1&country=us&date_posted=all'
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': process.env.RAPIDAPI_KEY,
      'x-rapidapi-host': process.env.RAPIDAPI_HOST,
    },
  }

  try {
    const response = await fetch(url, options)
    const { data, errors } = await response.json() as JSONResponse
    if (errors !== undefined) {
      const error = new Error(
        errors?.map(e => e.message).join('\n') ?? 'unknown',
      )
      return await Promise.reject(error)
    }
    if (response.ok) {
      if (data) {
        return data
      }
      else {
        return await Promise.reject(new Error(`errors`))
      }
    }
    return await Promise.reject(new Error('Unknown error or response not ok'))
  }
  catch (error) {
    // Return a rejected Promise with the error or a default message
    return Promise.reject(error instanceof Error ? error : new Error('An unknown error occurred'))
  }
}
