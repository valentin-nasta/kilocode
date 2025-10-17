// kilocode_change - new file: Button component that opens release notes modal manually
import React, { useState } from "react"
import { FileText } from "lucide-react"
import { Button } from "../ui"
import { ReleaseNotesModal } from "./ReleaseNotesModal"
import { useAppTranslation } from "@/i18n/TranslationContext"

interface ManualReleaseNotesButtonProps {
	buttonText?: string
	className?: string
}

export const ManualReleaseNotesButton: React.FC<ManualReleaseNotesButtonProps> = ({
	buttonText,
	className = "w-40",
}) => {
	const { t } = useAppTranslation()
	const [showModal, setShowModal] = useState(false)

	const displayText = buttonText || t("kilocode:releaseNotes.viewReleaseNotes")

	return (
		<>
			<Button onClick={() => setShowModal(true)} className={className}>
				<FileText className="p-0.5" />
				{displayText}
			</Button>

			{showModal && <ReleaseNotesModal isOpen onClose={() => setShowModal(false)} />}
		</>
	)
}
