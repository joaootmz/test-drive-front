import {
    AvatarIcon,
    PersonIcon,
    UploadIcon
} from "@radix-ui/react-icons"

export const labels = [
    {
        value: "pdf",
        label: "pdf",
    },
    {
        value: "docx",
        label: "docx",
    },
    {
        value: "jpg",
        label: "jpg",
    },
    {
        value: "xls",
        label: "xls",
    },
]

export const statuses = [
    {
        value: "uploaded",
        label: "uploaded",
        icon: UploadIcon,
    }
]

export const priorities = [
    {
        label: "admin",
        value: "admin",
        icon: AvatarIcon,
    },
    {
        label: "composer",
        value: "composer",
        icon: PersonIcon,
    },
]