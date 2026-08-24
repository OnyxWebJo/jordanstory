# Batch 06 — Customize Your Tour Recovery

## Confirmed Evidence
The live tour index exposes **Customize Your Tour** as a primary product entry point.

## Problem
Search retrieval confirms the entry point but does not expose the complete dynamic form schema.

## Required Rendered Extraction
The AI implementation/migration agent must:
- click/open Customize Your Tour
- capture the final route/modal
- capture all labels
- input names
- required/optional state
- dropdown/select values
- date fields
- passenger fields
- country/nationality values
- destination choices
- hotel/category choices if present
- budget fields if present
- special requests
- consent fields
- validation text
- submit destination/API endpoint where safe to inspect
- success/error states

## Output
Create:
- `custom-tour-form.raw.json`
- `custom-tour-form-options.raw.json`
- `custom-tour-form.md`

## No-Invention Rule
If a field is not present in the legacy form, mark it `NEW_DESIGN_FIELD` when we add it later. Never describe a newly designed field as extracted legacy data.
