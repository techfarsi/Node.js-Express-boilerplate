export const successResponse = (key: string, data: object, message?: string) => {
  if (message) {
    return {
      status: 'success',
      data: {
        [key]: data,
      },
      message
    }
  } else {
    return {
      status: 'success',
      data: {
        [key]: data,
      },
    }
  }
}

export const failResponse = (message: string) => {
  return {
    status: 'error',
    message,
  }
}
