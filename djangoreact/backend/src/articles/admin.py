from django.contrib import admin

# Register your models here.
from .models import Notes, User, Usernotesmap

admin.site.register(Notes)
admin.site.register(User)
admin.site.register(Usernotesmap)
