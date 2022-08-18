app.api.files -- take username
app.api.file -- take username
app.api.saveFile -- take username

ProjectStore

- projects.all(username)
- projects.get(username, name)
- projects.set(username, name, project)
- projects.delete(username, name, project)

FileStore

- files.all(username, name)
- files.get(username, name, path)
- files.set(username, name, path, file)
- files.delete(username, name, path)

use dotted line for file list

Project -- recall a file
Project -- recall a project (all files)

ProjectList -- recall a project (all files)
ProjectList -- be able to sort projects.

# rendering

support paragraph

- add a break after text ending with two "\n\n"

<code> node

recall in fullscreen

- set meta theme-color in Mimor fullscreen

  - do not forget to undo meta theme-color

# user

support `name_zh` & `name_en`

# embedded

embedded route for iframe

# learn

learn about html <span> v.s. <div>
