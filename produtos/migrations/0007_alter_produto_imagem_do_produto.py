# Generated by Django 4.2.3 on 2023-07-23 22:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('produtos', '0006_alter_produto_inscritos_youtube'),
    ]

    operations = [
        migrations.AlterField(
            model_name='produto',
            name='imagem_do_produto',
            field=models.ImageField(default='', max_length=400, upload_to=''),
        ),
    ]
