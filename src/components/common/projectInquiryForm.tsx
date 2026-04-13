"use client"

import * as React from "react"

import { useTranslations } from "next-intl"
import { useSearchParams } from "next/navigation"

import { zodResolver } from "@hookform/resolvers/zod"
import {
  ArrowRightIcon,
  CheckCircleIcon,
  TicketIcon,
} from "@phosphor-icons/react"
import { useForm } from "react-hook-form"

import { Button } from "@/src/components/ui/button"

import { trackEvent } from "@/src/lib/analytics"
import { cn } from "@/src/lib/utils/utils"
import {
  ProjectInquiryFormData,
  createProjectInquirySchema,
} from "@/src/lib/validations/projectInquiry"

interface ProjectInquiryFormProps {
  origin: "hero" | "contact" | "contactPage"
}

interface ProjectInquiryOption {
  value: string
  label: string
}

interface ProjectInquirySelectionGroupProps {
  label: string
  name: "projectType" | "budget" | "deadline"
  options: ProjectInquiryOption[]
  selectedValue: string
  onSelect: (value: string) => void
}

interface Web3FormsClientResponse {
  message?: string
  success?: boolean
}

const web3FormsAccessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY

function ProjectInquirySelectionGroup({
  label,
  name,
  options,
  selectedValue,
  onSelect,
}: ProjectInquirySelectionGroupProps): React.JSX.Element {
  return (
    <fieldset className="space-y-4">
      <legend className="text-[11px] font-black uppercase tracking-[0.35em] text-muted-foreground">
        {label}
      </legend>
      <div className="grid gap-3 sm:grid-cols-2">
        {options.map((option) => (
          <button
            key={`${name}-${option.value}`}
            type="button"
            onClick={(): void => onSelect(option.value)}
            className={cn(
              "relative overflow-hidden border px-4 py-4 text-left text-[11px] font-black uppercase tracking-[0.22em] transition-all",
              selectedValue === option.value
                ? "border-brand-primary bg-brand-primary text-white shadow-lg shadow-brand-primary/20"
                : "border-border/60 bg-background text-muted-foreground hover:border-foreground/20 hover:bg-foreground/[0.03] hover:text-foreground"
            )}
            style={{
              clipPath:
                "polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 18px 100%, 0 calc(100% - 18px))",
            }}
          >
            <span className="absolute right-0 top-0 h-5 w-5 border-l border-b border-current/15" />
            {option.label}
          </button>
        ))}
      </div>
    </fieldset>
  )
}

function FieldShell({
  children,
}: {
  children: React.ReactNode
}): React.JSX.Element {
  return (
    <section
      className="relative overflow-hidden border border-border/60 bg-foreground/[0.02] p-5 md:p-6"
      style={{
        clipPath:
          "polygon(0 0, calc(100% - 28px) 0, 100% 28px, 100% 100%, 28px 100%, 0 calc(100% - 28px))",
      }}
    >
      <div className="absolute left-0 top-0 h-12 w-12 border-r border-b border-border/60 bg-brand-primary/10" />
      <div className="absolute bottom-0 right-0 h-14 w-14 border-l border-t border-border/60 bg-foreground/[0.04]" />
      <div className="relative">{children}</div>
    </section>
  )
}

function TextField({
  children,
  hasError = false,
}: {
  children: React.ReactNode
  hasError?: boolean
}): React.JSX.Element {
  return (
    <div
      className={cn(
        "relative overflow-hidden border bg-background px-4 py-4 transition-colors",
        hasError
          ? "border-destructive"
          : "border-border/60 focus-within:border-brand-primary"
      )}
      style={{
        clipPath:
          "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))",
      }}
    >
      <span className="absolute right-0 top-0 h-4 w-4 border-l border-b border-current/10" />
      {children}
    </div>
  )
}

export function ProjectInquiryForm({
  origin,
}: ProjectInquiryFormProps): React.JSX.Element {
  const t = useTranslations("Index.ContactDrawer")
  const searchParams = useSearchParams()
  const referral = searchParams.get("referral")
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isSuccess, setIsSuccess] = React.useState(false)
  const [submissionError, setSubmissionError] = React.useState<string | null>(
    null
  )
  const idPrefix = React.useId()

  const schema = React.useMemo(
    () =>
      createProjectInquirySchema({
        nameMin: t("validation.nameMin"),
        emailInvalid: t("validation.emailInvalid"),
        projectTypeRequired: t("validation.projectTypeRequired"),
        budgetRequired: t("validation.budgetRequired"),
        deadlineRequired: t("validation.deadlineRequired"),
        messageMin: t("validation.messageMin"),
      }),
    [t]
  )

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<ProjectInquiryFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      projectType: "landing",
      budget: "range2",
      deadline: "thirtyDays",
      company: "",
      email: "",
      message: "",
      name: "",
    },
  })

  const projectTypes = React.useMemo<ProjectInquiryOption[]>(
    () => [
      { value: "landing", label: t("projectTypes.landing") },
      { value: "sales", label: t("projectTypes.sales") },
      { value: "institutional", label: t("projectTypes.institutional") },
      { value: "other", label: t("projectTypes.other") },
    ],
    [t]
  )

  const budgetOptions = React.useMemo<ProjectInquiryOption[]>(
    () => [
      { value: "range1", label: t("budgets.range1") },
      { value: "range2", label: t("budgets.range2") },
      { value: "range3", label: t("budgets.range3") },
      { value: "range4", label: t("budgets.range4") },
    ],
    [t]
  )

  const deadlineOptions = React.useMemo<ProjectInquiryOption[]>(
    () => [
      { value: "urgent", label: t("deadlines.urgent") },
      { value: "thirtyDays", label: t("deadlines.thirtyDays") },
      { value: "sixtyDays", label: t("deadlines.sixtyDays") },
      { value: "flexible", label: t("deadlines.flexible") },
    ],
    [t]
  )

  const selectedProjectType = watch("projectType")
  const selectedBudget = watch("budget")
  const selectedDeadline = watch("deadline")

  const onSubmit = React.useCallback(
    async (data: ProjectInquiryFormData): Promise<void> => {
      setIsSubmitting(true)
      setSubmissionError(null)

      try {
        if (!web3FormsAccessKey) {
          throw new Error("missing_access_key")
        }

        const formData = new FormData()

        formData.append("access_key", web3FormsAccessKey)
        formData.append("name", data.name)
        formData.append("email", data.email)
        formData.append("message", data.message)
        formData.append("subject", `Novo briefing de projeto: ${data.name}`)
        formData.append("replyto", data.email)
        formData.append("company", data.company || t("notProvided"))
        formData.append("budget", t(`budgets.${data.budget}`))
        formData.append("deadline", t(`deadlines.${data.deadline}`))
        formData.append("project_type", t(`projectTypes.${data.projectType}`))
        formData.append("origin", origin)
        formData.append("botcheck", "")

        if (referral) {
          formData.append("referral_source", referral)
        }

        const response = await fetch("https://api.web3forms.com/submit", {
          body: formData,
          headers: {
            Accept: "application/json",
          },
          method: "POST",
        })
        const result = (await response.json()) as Web3FormsClientResponse

        if (!response.ok || !result.success) {
          throw new Error(result.message || "web3forms_submission_failed")
        }

        trackEvent("generate_lead", {
          budget: data.budget,
          deadline: data.deadline,
          origin,
          project_type: data.projectType,
          referral: Boolean(referral),
        })
        setIsSuccess(true)
        reset()
      } catch {
        trackEvent("brief_submit_error", {
          origin,
          project_type: data.projectType,
        })
        setSubmissionError(t("errorMessage"))
      } finally {
        setIsSubmitting(false)
      }
    },
    [origin, referral, reset, t]
  )

  return isSuccess ? (
    <section
      className="relative overflow-hidden border border-border/60 bg-background px-6 py-14 text-center md:px-10"
      style={{
        clipPath:
          "polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 40px 100%, 0 calc(100% - 40px))",
      }}
    >
      <div className="absolute left-0 top-0 h-16 w-16 border-r border-b border-border/60 bg-brand-primary/10" />
      <div className="absolute bottom-0 right-0 h-20 w-20 border-l border-t border-border/60 bg-foreground/[0.04]" />
      <div className="relative flex flex-col items-center justify-center gap-8">
        <div
          className="flex size-24 items-center justify-center border border-brand-primary/25 bg-brand-primary text-white shadow-2xl shadow-brand-primary/20"
          style={{
            clipPath:
              "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))",
          }}
        >
          <CheckCircleIcon size={52} weight="fill" />
        </div>
        <div className="space-y-3">
          <h2 className="font-heading text-4xl font-black uppercase tracking-[-0.05em] text-foreground">
            {t("successTitle")}
          </h2>
          <p className="mx-auto max-w-md text-base leading-relaxed text-muted-foreground">
            {t("successMessage")}
          </p>
        </div>
      </div>
    </section>
  ) : (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {referral ? (
        <FieldShell>
          <div className="flex items-start gap-4">
            <div
              className="flex size-10 shrink-0 items-center justify-center border border-brand-primary/20 bg-brand-primary text-white"
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
              }}
            >
              <TicketIcon size={20} weight="fill" />
            </div>
            <div className="space-y-1">
              <p className="text-[11px] font-black uppercase tracking-[0.35em] text-brand-primary">
                {t("referralLabel")}
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {t("referralText", { name: referral })}
              </p>
            </div>
          </div>
        </FieldShell>
      ) : null}

      <FieldShell>
        <div className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <label className="space-y-3" htmlFor={`${idPrefix}-name`}>
              <span className="text-[11px] font-black uppercase tracking-[0.35em] text-muted-foreground">
                {t("fields.name.label")}
              </span>
              <TextField hasError={Boolean(errors.name)}>
                <input
                  {...register("name")}
                  id={`${idPrefix}-name`}
                  placeholder={t("fields.name.placeholder")}
                  className="h-14 w-full bg-transparent text-base text-foreground outline-none placeholder:text-muted-foreground/40"
                />
              </TextField>
              {errors.name ? (
                <span className="text-sm text-destructive">
                  {errors.name.message}
                </span>
              ) : null}
            </label>

            <label className="space-y-3" htmlFor={`${idPrefix}-email`}>
              <span className="text-[11px] font-black uppercase tracking-[0.35em] text-muted-foreground">
                {t("fields.email.label")}
              </span>
              <TextField hasError={Boolean(errors.email)}>
                <input
                  {...register("email")}
                  id={`${idPrefix}-email`}
                  type="email"
                  placeholder={t("fields.email.placeholder")}
                  className="h-14 w-full bg-transparent text-base text-foreground outline-none placeholder:text-muted-foreground/40"
                />
              </TextField>
              {errors.email ? (
                <span className="text-sm text-destructive">
                  {errors.email.message}
                </span>
              ) : null}
            </label>
          </div>

          <label className="block space-y-3" htmlFor={`${idPrefix}-company`}>
            <span className="text-[11px] font-black uppercase tracking-[0.35em] text-muted-foreground">
              {t("fields.company.label")}
            </span>
            <TextField>
              <input
                {...register("company")}
                id={`${idPrefix}-company`}
                placeholder={t("fields.company.placeholder")}
                className="h-14 w-full bg-transparent text-base text-foreground outline-none placeholder:text-muted-foreground/40"
              />
            </TextField>
          </label>

          <label className="block space-y-3" htmlFor={`${idPrefix}-message`}>
            <span className="text-[11px] font-black uppercase tracking-[0.35em] text-muted-foreground">
              {t("fields.message.label")}
            </span>
            <TextField hasError={Boolean(errors.message)}>
              <textarea
                {...register("message")}
                id={`${idPrefix}-message`}
                rows={6}
                placeholder={t("fields.message.placeholder")}
                className="w-full resize-none bg-transparent text-base text-foreground outline-none placeholder:text-muted-foreground/40"
              />
            </TextField>
            {errors.message ? (
              <span className="text-sm text-destructive">
                {errors.message.message}
              </span>
            ) : null}
          </label>
        </div>
      </FieldShell>

      <FieldShell>
        <ProjectInquirySelectionGroup
          label={t("fields.projectType.label")}
          name="projectType"
          options={projectTypes}
          selectedValue={selectedProjectType}
          onSelect={(value: string): void =>
            setValue("projectType", value, {
              shouldDirty: true,
              shouldTouch: true,
              shouldValidate: true,
            })
          }
        />
      </FieldShell>

      <FieldShell>
        <ProjectInquirySelectionGroup
          label={t("fields.budget.label")}
          name="budget"
          options={budgetOptions}
          selectedValue={selectedBudget}
          onSelect={(value: string): void =>
            setValue("budget", value, {
              shouldDirty: true,
              shouldTouch: true,
              shouldValidate: true,
            })
          }
        />
      </FieldShell>

      <FieldShell>
        <ProjectInquirySelectionGroup
          label={t("fields.deadline.label")}
          name="deadline"
          options={deadlineOptions}
          selectedValue={selectedDeadline}
          onSelect={(value: string): void =>
            setValue("deadline", value, {
              shouldDirty: true,
              shouldTouch: true,
              shouldValidate: true,
            })
          }
        />
      </FieldShell>

      {submissionError ? (
        <p
          className="border border-destructive/20 bg-destructive/10 px-5 py-4 text-sm leading-relaxed text-destructive"
          style={{
            clipPath:
              "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))",
          }}
        >
          {submissionError}
        </p>
      ) : null}

      <div className="border-t border-border/60 pt-6">
        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting}
          className="h-16 w-full rounded-full bg-foreground px-8 text-[11px] font-black uppercase tracking-[0.35em] text-background shadow-xl shadow-black/10 hover:bg-brand-primary"
        >
          {isSubmitting ? t("submitting") : t("submit")}
          <ArrowRightIcon size={18} weight="bold" />
        </Button>
      </div>
    </form>
  )
}
