import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { CorePhone } from "@/modules/core/components/CorePhone.tsx"
import "./index.css"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CorePhone />
  </StrictMode>,
)
