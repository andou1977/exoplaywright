pipeline {
    agent any

    stages {
        stage('Install') {
            steps {
                powershell 'npm install'
                powershell 'npx playwright install'
            }
        }

        stage('Test') {
            steps {
                powershell 'npx playwright test'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'playwright-report/**'
        }
    }
}