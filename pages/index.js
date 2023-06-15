import Head from 'next/head'
import FormikContainer from '../src/forms/FormikContainer'
import inputsArray from '../src/forms/formData';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Title</title>
        <meta name="description" content="Some description about the site.." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FormikContainer inputs={inputsArray} submitBtn='Send' />
    </div>
  )
}
