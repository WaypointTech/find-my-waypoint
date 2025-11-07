#!/bin/zsh

# Script to stop all npm dev servers for worktrees

echo "Stopping all Vite dev servers..."

# Find and kill all vite processes
pkill -f "vite" || echo "No Vite processes found"

echo "All dev servers stopped!"

