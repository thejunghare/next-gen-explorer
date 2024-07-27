import {invoke} from '@tauri-apps/api/tauri';

export async function fetchFiles(path) {
    try {
        const files = await invoke('fetch_files', {path});
        return files;
    } catch (error) {
        console.error('Error fetching files', error);
        return [];
    }
}