#!/bin/zsh

# Script to start npm dev servers for all worktrees simultaneously
# Each worktree will run on a different port

# Source the user's shell environment
export PATH="/home/adrian/.nvm/versions/node/v20.19.5/bin:/usr/bin:/usr/local/bin:$PATH"

# Define worktree paths and ports
worktrees=(
  "/home/adrian/.cursor/worktrees/find-my-waypoint__WSL__Ubuntu-24.04_/JUWgt:5173"
  "/home/adrian/.cursor/worktrees/find-my-waypoint__WSL__Ubuntu-24.04_/pNYCQ:5174"
  "/home/adrian/.cursor/worktrees/find-my-waypoint__WSL__Ubuntu-24.04_/tD4q4:5175"
)

# Function to start dev server in a worktree
start_worktree() {
  local path_port=$1
  local path=${path_port%:*}
  local port=${path_port#*:}
  local name=${path##*/}
  
  echo "Starting dev server for $name on port $port..."
  
  # Use nohup with explicit PATH and full npm path
  cd "$path" || return 1
  
  # Use the full path to npm and run in background with proper environment
  # Include node_modules/.bin in PATH so vite can be found
  (
    export PATH="$path/node_modules/.bin:/home/adrian/.nvm/versions/node/v20.19.5/bin:/usr/bin:/usr/local/bin:/bin:$PATH"
    cd "$path"
    /home/adrian/.nvm/versions/node/v20.19.5/bin/npm run dev -- --port "$port" --host localhost
  ) > "/tmp/waypoint-$name.log" 2>&1 &
  local pid=$!
  
  # Give it a moment to start using /bin/sleep
  /bin/sleep 2
  
  # Check if process is still running
  if kill -0 "$pid" 2>/dev/null; then
    echo "✓ Started $name (PID: $pid) on port $port"
    echo "  Logs: /tmp/waypoint-$name.log"
    echo "  URL: http://localhost:$port"
  else
    echo "✗ Failed to start $name - check logs: /tmp/waypoint-$name.log"
  fi
}

# Stop any existing servers first
echo "Stopping any existing Vite servers..."
pkill -f "vite" 2>/dev/null
sleep 1

# Start all worktrees
for worktree in "${worktrees[@]}"; do
  start_worktree "$worktree"
done

echo ""
echo "All dev servers started!"
echo ""
echo "To view logs: tail -f /tmp/waypoint-*.log"
echo "To stop all: ./stop-all-worktrees.sh"
echo ""
echo "Servers should be available at:"
echo "  - JUWgt: http://localhost:5173"
echo "  - pNYCQ: http://localhost:5174"
echo "  - tD4q4: http://localhost:5175"
