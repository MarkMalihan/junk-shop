import LOCAL_MEMO_IMAGE from "../../../items/local-memo/assets/icon.png";
import PUPPY_EYES_IMAGE from "../../../items/puppy-eyes/assets/icon.png";
import OPEN_THESE_APPS_IMAGE from "../../../items/open-these-apps/assets/icon.png";
import CODE_ARCHIVE_IMAGE from "../../../items/local-code-archive/assets/icon.png"

import LOCAL_MEMO_PROFILE from "../../../items/local-memo/assets/profile.png"
import LOCAL_MEMO_FOLDERS from "../../../items/local-memo/assets/folders.png"
import LOCAL_MEMO_TAGS from "../../../items/local-memo/assets/tags.png"
import LOCAL_MEMO_CREATE_NOTE from "../../../items/local-memo/assets/create-note.png"
import LOCAL_MEMO_FEED from "../../../items/local-memo/assets/feed.png"
import LOCAL_MEMO_MD from "../../../items/local-memo/assets/markdown.png"
import LOCAL_MEMO_COMMENT from "../../../items/local-memo/assets/comment.png"

import PUPPY_EYES_WORKSPACE from "../../../items/puppy-eyes/assets/workspace.png"
import PUPPY_EYES_ENV from "../../../items/puppy-eyes/assets/environment.png"
import PUPPY_EYES_COLLECTIONS from "../../../items/puppy-eyes/assets/collections.png"
import PUPPY_EYES_CREATE_REQUEST from "../../../items/puppy-eyes/assets/create-request.png"
import PUPPY_EYES_BODY_TYPES from "../../../items/puppy-eyes/assets/body-types.png"
import PUPPY_EYES_SEND_REQUEST from "../../../items/puppy-eyes/assets/send-request.png"

import OTA_GROUPS from "../../../items/open-these-apps/assets/Group.png"
import OTA_CREATE from "../../../items/open-these-apps/assets/Create.png"
import OTA_UPDATE_GROUPS from "../../../items/open-these-apps/assets/Update.png"
import OTA_OPEN from "../../../items/open-these-apps/assets/Select-and-Open.png"

import LOCAL_CODE_ARCHIVE_ROOT from "../../../items/local-code-archive/assets/root.png"
import LOCAL_CODE_ARCHIVE_REPO_PICKER from "../../../items/local-code-archive/assets/repo-picker.png"
import LOCAL_CODE_ARCHIVE_FILE_TREE from "../../../items/local-code-archive/assets/file-tree.png"
import LOCAL_CODE_ARCHIVE_CODE_VIEW from "../../../items/local-code-archive/assets/code-view.png"
import LOCAL_CODE_ARCHIVE_MD_VIEW from "../../../items/local-code-archive/assets/md-view.png"

export const PRODUCTS = [
    {
        id: "local-memo",
        name: "Local Memo",
        image: LOCAL_MEMO_IMAGE,
        tags: ["ready", "no signature"],
        description: "Local Memo is a desktop application built for people who want full control of their notes. Everything lives in a local SQLite database. Switch between profiles for different contexts (work, personal, projects), organize notes in folders, and use tags and filters to find what you need. Write in Markdown, attach images, and discuss ideas with threaded comments—right inside each note.",
        version: "v0.1.0",
        features: [
            {
                name: "Profiles",
                description: "Separate workspaces (e.g. work, personal). Each profile has its own notes, folders, and tags."
            },
            {
                name: "Folders",
                description: "Organize notes in folders."
            },
            {
                name: "Notes",
                description: "Create, edit, pin, archive, and share with your other profiles (on this device only—not social or link sharing). Markdown content and image attachments. Soft and hard delete."
            },
            {
                name: "Comments",
                description: "Threaded comments on notes, with optional attachments."
            },
            {
                name: "Tags",
                description: "Per-profile tags. Filter notes by tag, status, date, or search."
            },
            {
                name: "Theme",
                description: "Light/dark mode with optional schedule (e.g. dark at night)."
            },
            {
                name: "Local-first",
                description: "Data stays on your device. No account or server required."
            }
        ],
        photos: [
            {
                src: LOCAL_MEMO_PROFILE,
                alt: "local-memo-profile"
            },
            {
                src: LOCAL_MEMO_FOLDERS,
                alt: "local-memo-folder"
            },
            {
                src: LOCAL_MEMO_TAGS,
                alt: "local-memo-tags"
            },
            {
                src: LOCAL_MEMO_CREATE_NOTE,
                alt: "local-memo-create-note"
            },
            {
                src: LOCAL_MEMO_FEED,
                alt: "local-memo-feed"
            },
            {
                src: LOCAL_MEMO_MD,
                alt: "local-memo-markdown"
            },
            {
                src: LOCAL_MEMO_COMMENT,
                alt: "local-memo-comment"
            },
        ]
    },
    {
        id: "puppy-eyes",
        name: "Puppy Eyes",
        image: PUPPY_EYES_IMAGE,
        tags: ["ready", "no signature"],
        description: "Puppy Eyes is a desktop application built for developers who want full control over their API workflow. Create and switch workspaces, organize endpoints in collections/folders, and define environments for different targets like local, staging, and production. Compose requests with method, URL, params, headers, and body (JSON/text/form-data), then inspect status, headers, and body in a structured response viewer.",
        version: "v0.1.0",
        features: [
            {
                name: "Workspaces",
                description: "Separate API contexts by project/team and switch between them quickly."
            },
            {
                name: "Collections",
                description: "Organize requests in folder trees for cleaner endpoint grouping."
            },
            {
                name: "Request Editor",
                description: "Build requests with method, URL, query params, headers, and body (JSON/text/form-data)."
            },
            {
                name: "Environments",
                description: "Store variables and inject placeholders (for example {{BASE_URL}}) at send time."
            },
            {
                name: "Response Viewer",
                description: "View status code, response headers, and formatted body after execution."
            },
            {
                name: "Theme",
                description: "Built-in light/dark modes for long API testing sessions."
            },
            {
                name: "Local-first",
                description: "Data and configuration stay on your device; no cloud account required."
            },
        ],
        photos: [
            {
                src: PUPPY_EYES_WORKSPACE,
                alt: "puppy-eyes-workspace"
            },
            {
                src: PUPPY_EYES_ENV,
                alt: "puppy-eyes-env"
            },
            {
                src: PUPPY_EYES_COLLECTIONS,
                alt: "puppy-eyes-collections"
            },
            {
                src: PUPPY_EYES_CREATE_REQUEST,
                alt: "puppy-eyes-create-request"
            },
            {
                src: PUPPY_EYES_BODY_TYPES,
                alt: "puppy-eyes-body-types"
            },
            {
                src: PUPPY_EYES_SEND_REQUEST,
                alt: "puppy-eyes-send-request"
            },
        ]
    },
    {
        id: "open-these-apps",
        name: "Open These Apps",
        image: OPEN_THESE_APPS_IMAGE,
        tags: ["ready", "no signature"],
        description: "Open These Apps helps you save startup time by turning repeated app-opening routines into one action. It reads your installed apps list (with local permission), lets you pick apps for each group, stores those groups locally, and launches them together when you hit Open.",
        version: "v0.1.0",
        features: [
            {
                name: "Group Workspaces",
                description: "Create, select, update, and delete named groups of installed apps."
            },
            {
                name: "Installed Apps Picker",
                description: "Pull apps from your system and add them to a group quickly."
            },
            {
                name: "One-click Launch",
                description: "Open all apps in the selected group in one run action."
            },
            {
                name: "Local-first Storage",
                description: "Group and item data are saved in local SQLite, not cloud services."
            },
            {
                name: "Response Viewer",
                description: "View status code, response headers, and formatted body after execution."
            },
            {
                name: "Theme",
                description: "Built-in theme support for comfortable day and night usage."
            }
        ],
        photos: [
            {
                src: OTA_GROUPS,
                alt: "open-these-apps-groups"
            },
            {
                src: OTA_CREATE,
                alt: "open-these-apps-create-groups"
            },
            {
                src: OTA_UPDATE_GROUPS,
                alt: "open-these-apps-update-groups"
            },
            {
                src: OTA_OPEN,
                alt: "open-these-apps-run-apps"
            }
        ]
    },
    {
        id: "local-code-archive",
        name: "Local Code Archive",
        image: CODE_ARCHIVE_IMAGE,
        tags: ["ready", "no signature"],
        description: "Local Code Archive is a desktop application for developers who want a fast, minimal way to navigate and read code on disk. Add one or more workspace roots (for example a parent folder that contains several clones), pick a repository under that root, then walk the folder tree and open files in the preview pane.",
        version: "v0.1.0",
        features: [
            {
                name: "Workspace roots",
                description: "Register local directories (for example a projects folder) and switch between them."
            },
            {
                name: "Repository picker",
                description: "Choose which repo under the active root you are browsing."
            },
            {
                name: "File tree",
                description: "Expandable tree with loading from disk; optional search to filter the tree while you work."
            },
            {
                name: "File preview",
                description: "Open a file to see Markdown (preview or code), highlighted code/text, or an asset-oriented view when applicable."
            },
            {
                name: "Copy",
                description: "Copy the file body from the preview toolbar."
            },
            {
                name: "Reveal in file manager",
                description: "Open the current location in the OS file explorer where supported."
            },
            {
                name: "Theme",
                description: "Built-in light/dark modes."
            },
            {
                name: "Local-first",
                description: "Trees and file reads happen on your device; workspace records stay local."
            },
        ],
        photos: [
            {
                src: LOCAL_CODE_ARCHIVE_ROOT,
                alt: "local-code-archive-root"
            },
            {
                src: LOCAL_CODE_ARCHIVE_REPO_PICKER,
                alt: "local-code-archive-repo-picker"
            },
            {
                src: LOCAL_CODE_ARCHIVE_FILE_TREE,
                alt: "local-code-archive-file-tree"
            },
            {
                src: LOCAL_CODE_ARCHIVE_CODE_VIEW,
                alt: "local-code-archive-code-view"
            },
            {
                src: LOCAL_CODE_ARCHIVE_MD_VIEW,
                alt: "local-code-archive-md-view"
            }
        ]
    },
];