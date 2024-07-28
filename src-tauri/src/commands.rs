use std::fs;

#[tauri::command]
pub fn fetch_files(path: String) -> Result<Vec<String>, String> {
    match fs::read_dir(path) {
        Ok(entries) => {
            let files = entries
                .filter_map(Result::ok)
                .map(|entry| entry.file_name().into_string().unwrap())
                .collect();
            Ok(files)
        }
        Err(err) => Err(err.to_string()),
    }
}
