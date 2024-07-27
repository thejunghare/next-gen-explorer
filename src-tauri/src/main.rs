#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

mod commands;

use tauri::{CustomMenuItem, Menu, MenuItem, Submenu};

fn main() {
  let quit = CustomMenuItem::new("quit".to_string(), "Quit");
  let close = CustomMenuItem::new("close".to_string(), "Close");
  let submenu = Submenu::new("File", Menu::new().add_item(quit).add_item(close));
  let menu = Menu::new()
      .add_native_item(MenuItem::Copy)
      .add_native_item(MenuItem::Paste)
      .add_submenu(submenu);

  tauri::Builder::default()
      .menu(menu)
      .invoke_handler(tauri::generate_handler![commands::fetch_files])
      .run(tauri::generate_context!())
      .expect("error while running tauri application");
}
