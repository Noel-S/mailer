use resend_rs::types::CreateEmailBaseOptions;
use resend_rs::{Resend, Result};

// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
#[tauri::command]
fn set_preferences(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[tauri::command]
async fn send(to: &str, subject: &str, content: &str) -> Result<(), String> {
    let resend = Resend::new("re_...");

    let from = "User <user@domain.com>";
    let recipients: Vec<&str> = to.split(',').collect(); 
    let html = format!("<p>{}</p>", content);

    let email = CreateEmailBaseOptions::new(from, recipients, subject)
        .with_html(&html);

    let _email = resend.emails.send(email).await.map_err(|e| e.to_string())?;
    _email.id;
    Ok(())
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_shell::init())
        .invoke_handler(tauri::generate_handler![set_preferences, send])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
