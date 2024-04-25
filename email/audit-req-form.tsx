import React from 'react'
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from '@react-email/components'
import { Tailwind } from '@react-email/tailwind'

type ContactFormEmailProps = {
  message: string
  senderEmail: string
  addUrl: string
  auditType: string
}

export default function AuditReqForm({
  message,
  senderEmail,
  addUrl,
  auditType,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Ny auditrequest from NextToEdit Tech Solutions</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">
                You received the following message from the contact form
              </Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>Avsändarens epost: {senderEmail}</Text>
              <Text>URL: {addUrl}</Text>
              <Text>Audit Type: {auditType}</Text>{' '}
              {/* Display the audit type in the email */}
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
