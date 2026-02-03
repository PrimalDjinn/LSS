<script setup lang="ts">
import { Html, Head, Body, Container, Section, Text, Button, Hr, Heading, Preview } from '@vue-email/components'

defineProps<{
    name: string
    email: string
    message: string
}>()
</script>

<template>
    <Html lang="en">

    <Head />
    <Preview>New contact form submission from {{ name }}</Preview>

    <Body style="background-color: #f8fafc; font-family: 'Helvetica Neue', Arial, sans-serif;">
        <Container style="max-width: 600px; margin: 0 auto; padding: 20px;">
            <!-- Header -->
            <Section
                style="background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
                <Heading as="h1" style="margin: 0; color: white; font-size: 24px; font-weight: bold;">
                    New Contact Form Submission
                </Heading>
                <Text style="margin: 10px 0 0 0; color: rgba(255, 255, 255, 0.9); font-size: 14px;">
                    Legionnaire Security Solutions
                </Text>
            </Section>

            <!-- Content -->
            <Section style="background: #ffffff; padding: 30px; border: 1px solid #e2e8f0; border-top: none;">
                <!-- From Field -->
                <Section style="margin-bottom: 20px;">
                    <Text
                        style="font-weight: bold; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 5px 0;">
                        From
                    </Text>
                    <Section style="padding: 15px; background: #f8fafc; border-radius: 6px; border: 1px solid #e2e8f0;">
                        <Text style="margin: 0; color: #1e293b; font-size: 14px;">
                            {{ name }} ({{ email }})
                        </Text>
                    </Section>
                </Section>

                <!-- Message Field -->
                <Section style="margin-bottom: 20px;">
                    <Text
                        style="font-weight: bold; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 5px 0;">
                        Message
                    </Text>
                    <Section style="padding: 15px; background: #f8fafc; border-radius: 6px; border: 1px solid #e2e8f0;">
                        <Text style="margin: 0; color: #1e293b; font-size: 14px; white-space: pre-wrap;">
                            {{ message }}
                        </Text>
                    </Section>
                </Section>

                <Hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0;" />

                <!-- Reply Button -->
                <Section style="text-align: center;">
                    <Button :href="`mailto:${email}?subject=Re: Your inquiry to Legionnaire Security Solutions`"
                        style="background-color: #f59e0b; color: #1e293b; padding: 12px 24px; border-radius: 6px; font-weight: 600; text-decoration: none; display: inline-block;">
                        Reply to {{ name }}
                    </Button>
                </Section>
            </Section>

            <!-- Footer -->
            <Section style="text-align: center; padding: 20px; color: #94a3b8; font-size: 12px;">
                <Text style="margin: 0;">
                    This email was sent from the contact form on legionnairesl.co.ke
                </Text>
                <Text style="margin: 10px 0 0 0;">
                    Reply directly to this email to respond to {{ name }}
                </Text>
            </Section>
        </Container>
    </Body>

    </Html>
</template>
