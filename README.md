# Keycloak Persian Theme

This repository contains a custom Persian theme for Keycloak, focusing specifically on the login page. The theme is designed to provide a localized user experience for Persian-speaking users.

## Directory Structure

The theme is organized as follows:

```
custom-theme/
└── login/
    ├── login.ftl
    ├── messages/
    │   ├── messages_en.properties
    │   └── messages_fa.properties
    ├── resources/
    │   ├── css/
    │   │   ├── identity.min.css
    │   │   └── login.css
    │   ├── font/
    │   │   └── IBMPlexSans-Regular.ttf
    │   └── js/
    │       └── login.js
    ├── template.ftl
    └── theme.properties
```

## Features

- **Localized Login Page**: The theme includes translations for the login page in Persian.
- **Custom Styles**: Custom CSS files to match the desired look and feel.
- **Font Support**: Includes the IBM Plex Sans font for better typography.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/okaeiz/keycloak-persian-theme.git
   ```

2. Copy the `custom-theme` directory to your Keycloak themes directory:
   ```bash
   cp -r keycloak-persian-theme/custom-theme /opt/bitnami/keycloak/themes/
   ```

3. Configure Keycloak to use the custom theme:
   - Log in to the Keycloak admin console.
   - Navigate to the realm settings.
   - Under the "Themes" tab, select `custom-theme` for the Login Theme.

4. Restart Keycloak to apply changes:
   ```bash
   # Command to restart Keycloak (modify as needed)
   sudo systemctl restart keycloak
   ```

## Contributing

Contributions are welcome! If you have suggestions or improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Keycloak](https://www.keycloak.org/) for providing an open-source identity and access management solution.
- Persian language support and localization efforts.
