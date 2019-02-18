from django.db import models

# Create your models here.



class Notes(models.Model):
    notesid = models.AutoField(primary_key=True)
    notestitle = models.CharField(max_length=50, blank=True, null=True)
    notescontent = models.CharField(max_length=500, blank=True, null=True)
    userid = models.ForeignKey('User', models.DO_NOTHING, db_column='userid')

    class Meta:
        managed = False
        db_table = 'notes'

    def __str__(self):
        return self.notestitle


class User(models.Model):
    userid = models.AutoField(primary_key=True)
    username = models.CharField(max_length=50, blank=True, null=True)
    password = models.CharField(max_length=50, blank=True, null=True)
    name = models.CharField(max_length=50, blank=True, null=True)
    contact = models.CharField(max_length=50, blank=True, null=True)
    email = models.CharField(max_length=50, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'user'

    def __str__(self):
        return self.username


class Usernotesmap(models.Model):
    usernotesmapid = models.AutoField(primary_key=True)
    userid = models.ForeignKey(User, models.DO_NOTHING, db_column='userid')
    notesid = models.ForeignKey(Notes, models.DO_NOTHING, db_column='notesid')

    class Meta:
        managed = False
        db_table = 'usernotesmap'

    def __str__(self):
        return self.usernotesmapid