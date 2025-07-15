import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  colors: {
    react: {
      100: '#3182CE',
      200: '#3182CE'
    },
    node: {
      100: '#359562',
      200: '#359562'
    },
    python: {
      100: '#D69E2E',
      200: '#D69E2E',
    },
    java: {
      100: '#9B2B2E',
      200: '#9B2B2E',
    },
    mysql: {
      100: '#805AD5',
      200: '#805AD5',
    },
    git: {
      100: '#4A5568',
      200: '#4A5568',
    },
    mongodb: {
      100: '#38A169',
      200: '#38A169',
    },
    html: {
      100: '#DD6B20',
      200: '#DD6B20',
    },
    css: {
      100: '#3182CE',
      200: '#3182CE',
    },
    chakra: {
      100: '#00B5D8',
      200: '#00B5D8',
    },
    render: {
      100: '#9F7AEA',
      200: '#9F7AEA'
    }
  }
})

export default theme
