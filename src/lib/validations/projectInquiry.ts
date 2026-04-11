import { z } from "zod"

export interface ProjectInquiryValidationMessages {
  nameMin: string
  emailInvalid: string
  projectTypeRequired: string
  budgetRequired: string
  deadlineRequired: string
  messageMin: string
}

export function createProjectInquirySchema(
  messages: ProjectInquiryValidationMessages
) {
  return z.object({
    name: z.string().trim().min(2, messages.nameMin),
    email: z.string().trim().email(messages.emailInvalid),
    company: z.string().trim().optional(),
    projectType: z.string().min(1, messages.projectTypeRequired),
    budget: z.string().min(1, messages.budgetRequired),
    deadline: z.string().min(1, messages.deadlineRequired),
    message: z.string().trim().min(10, messages.messageMin),
  })
}

export type ProjectInquiryFormData = z.infer<
  ReturnType<typeof createProjectInquirySchema>
>
