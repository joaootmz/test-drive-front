import {
    AvatarIcon,
    PersonIcon,
    UploadIcon,
    CrossCircledIcon,
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
    },
    {
        value: "error",
        label: "error",
        icon: CrossCircledIcon,
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