pipeline {
    agent {
        label 'docker'
    }
    options {
        timeout(time: 1, unit: 'HOURS') 
    }
    stages {
        stage('Check') {
            agent {
                dockerfile { 
                    label 'docker'
                    filename 'docker/build/Dockerfile'
                }
            }
            steps {
                sh 'cargo check'
            }
        }
        stage('Build') {
            agent {
                dockerfile { 
                    label 'docker'
                    filename 'docker/build/Dockerfile'
                }
            }
            steps {
                sh 'cargo build'
            }
        }
        stage('Build Docs') {
            agent {
                dockerfile { 
                    label 'docker'
                    filename 'docker/build/Dockerfile'
                }
            }
            steps {
                sh 'cargo doc'
            }
        }
        stage('Test') {
            agent {
                dockerfile { 
                    label 'docker'
                    filename 'docker/build/Dockerfile'
                }
            }
            steps {
                sh 'cargo test'
            }
        }
        stage('Build SASS') {
            agent {
                dockerfile { 
                    label 'docker'
                    filename 'docker/build/Dockerfile'
                }
            }
            steps {
                sh 'sass static/style.sass'
            }
        }
    }
}
