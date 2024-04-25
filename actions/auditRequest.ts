'use server'

import React from 'react'
import { Resend } from 'resend'
import { validateString, getErrorMessage } from '@/lib/utils'
import AuditReqForm from '@/email/audit-req-form'

const resend = new Resend(process.env.RESEND_API_KEY_AUDIT_REQUEST)

export const auditRequest = async (formData: FormData) => {
  const senderEmail = formData.get('senderEmail')
  const message = formData.get('message')
  const addUrl = formData.get('addUrl')
  const auditType = formData.get('auditType')

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: 'Invalid sender email',
    }
  }
  if (!validateString(message, 5000)) {
    return {
      error: 'Invalid message',
    }
  }

  let data
  try {
    data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'annika.edit.lindberg@gmail.com',
      subject: 'Message from audit request form',
      reply_to: senderEmail,
      react: React.createElement(AuditReqForm, {
        message: message,
        senderEmail: senderEmail,
        addUrl: addUrl ? String(addUrl) : '',
        auditType: auditType ? String(auditType) : '',
      }),
    })
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    }
  }

  return {
    data,
  }
}
